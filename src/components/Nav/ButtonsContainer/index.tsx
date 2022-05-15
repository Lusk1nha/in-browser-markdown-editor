import { ButtonSaveDocument } from "./ButtonSaveDocument";
import { ButtonDeleteDocument } from "./ButtonDeleteDocument";
import { Container } from "./style";

export function ButtonsContainer() {
  return (
    <Container>
      <ButtonDeleteDocument />
      <ButtonSaveDocument />
    </Container>
  );
}