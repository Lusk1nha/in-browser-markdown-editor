import { useEffect, useState } from "react";
import styled from "styled-components";
import { PreviewIcon } from "../../Icons/PreviewIcon";
import { Content, Header, TextContainer } from "../style"
import { BlockQuote } from "../TextCommands/BlockQuote";
import { BulletTopic } from "../TextCommands/BulletTopic";
import { CodeBlock } from "../TextCommands/CodeBlock";
import { NumericTopic } from "../TextCommands/NumericTopic";
import { SubTitle } from "../TextCommands/SubTitle";
import { SubTitle2 } from "../TextCommands/SubTitle2";
import { SubTitle3 } from "../TextCommands/SubTitle3";
import { SubTitle4 } from "../TextCommands/SubTitle4";
import { SuperTitle } from "../TextCommands/SuperTitle";
import { Text } from "../TextCommands/Text";
import { Title } from "../TextCommands/Title";

const ButtonPreviewMode = styled.button`
  background-color: transparent;
  max-width: 50px;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;

  cursor: pointer;
`;

interface IPreviewProps {
  onlyPreview: boolean;
  setOnlyPreview: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface ICommandProps {
  component: React.ReactNode | null;
  text: string;
  index: number;
}

const CommandPresets = ['#', '##', '###', '####', '#####', '######', '>', '-', 'numericBullet', '.']
const ScopeCommandsPresets = ['codeBlock']

export function Preview(props: IPreviewProps) {
  const [convertedValue, setConvertedValue] = useState<ICommandProps[]>([]);

  const {
    onlyPreview,
    setOnlyPreview
  } = props

  const handlePreviewMode = () => {
    setOnlyPreview(!onlyPreview)
  }

  const splitByLineBreaks = (text: string): Array<string> => {
    return text.split('\n');
  }

  const getTextCommand = (text: string): string => {
    return text.split(' ')[0]
  }

  const getTextWithoutCommand = (text: string): string => {
    return text.split(' ').slice(1).join(' ')
  }

  const checkIfIsACommand = (command: string): boolean => {
    if (CommandPresets.includes(command)) {
      return true
    }

    // Verifica se o primeiro comando é um número e se o segundo é um ponto.
    if (CommandPresets.includes(typeof Number(command[0]) && command[1] == '.' ? 'numericBullet' : command)) {
      return true
    }

    if (ScopeCommandsPresets.includes(command === '```' ? 'codeBlock' : command)) {
      return true
    }

    return false;
  }

  const selectComponentByCommand = (command: string, text: string, index: number, allCommands: any[]): any => {
    const isACommand: boolean = checkIfIsACommand(command);
    let component: React.ReactNode | undefined = undefined;
    let customCommand = Number(command[0]) != NaN && command[1] == '.' ? 'NumericTopic' : command
    let commandChilds: any[] = [];
    let commandStart = 0;
    let commandEnd = 0;
    
    if(isACommand) {
      if(command === '```') {
        const allCommandsAfterCommand = allCommands.slice(index + 1);

        if(allCommandsAfterCommand.findIndex(command => command == '```') !== -1) {
          commandStart = index + 1;
          commandEnd = allCommandsAfterCommand.findIndex(command => command == '```');
          customCommand = 'codeBlock';
          commandChilds = allCommandsAfterCommand.slice(0, commandEnd);
        }
      }

      const textWithoutCommand = getTextWithoutCommand(text);
      if(customCommand != 'codeBlock' && textWithoutCommand === '' || textWithoutCommand === undefined) {
        customCommand = 'text'
        text = command
      } else {
        text = textWithoutCommand
      }
    } else {
      customCommand = 'text'
      text = text;
    }

    switch (customCommand) {
      case '#':
        component = <Title key={index} text={text} />
        break;
      case '##':
        component = <SubTitle key={index} text={text} />
        break;
      case '###':
        component = <SubTitle2 key={index} text={text} />
        break;
      case '####':
        component = <SubTitle3 key={index} text={text} />
        break;
      case '#####':
        component = <SubTitle4 key={index} text={text} />
        break;
      case '######':
        component = <SuperTitle key={index} text={text} />
        break;
      case '>':
        component = <BlockQuote key={index} text={text} />
        break;
      case 'NumericTopic':
        component = <NumericTopic key={index} numeric={command[0]} text={text} />
        break;
      case '-':
        component = <BulletTopic key={index} text={text} />
        break;
      case 'codeBlock':
        component = <CodeBlock key={index} texts={commandChilds} />
        break;
      default:
        component = <Text key={index} text={text} />
    }

    return {
      component,
      jump: commandEnd != 0 ? commandEnd + 1: 0
    }
  }

  useEffect(() => {
    if (props.value && props.value.length) {
      const separatedTextByLineBreak = splitByLineBreaks(props.value);
      const components: any[] = [];

      for (let index = 0; index < separatedTextByLineBreak.length; index++) {
        const text: string = separatedTextByLineBreak[index];
        const command: string = getTextCommand(text);
        const commandComponent = selectComponentByCommand(command, text, index, separatedTextByLineBreak);

        index += commandComponent.jump

        components.push({
          component: commandComponent.component,
          text: text,
          index: index
        });
      }

      // const textConvertedToCommands: ICommandProps[] = separatedTextByLineBreak.map((text, index): ICommandProps => {
      //   const command: string = getTextCommand(text);
      //   const commandComponent = selectComponentByCommand(command, text, index, separatedTextByLineBreak);

      //   return {
      //     component: commandComponent.component,
      //     text: text,
      //     index: index
      //   };
      // })
      
      setConvertedValue(components);
    }

  }, [props.value])

  return (
    <Content>
      <Header>
        Preview

        <ButtonPreviewMode onClick={handlePreviewMode}>
          <PreviewIcon />
        </ButtonPreviewMode>
      </Header>
      <TextContainer onCenter={onlyPreview}>
        {
          convertedValue.map((command, index) => {
            if (command.component !== null) {
              if (command.text === '') {
                return <br></br>
              }

              return command.component
            }
          })
        }
      </TextContainer>
    </Content>
  )
}