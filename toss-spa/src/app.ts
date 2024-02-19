import Header from "./components/header";
import Tech from "./pages/tech";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${Header}
  ${Tech}
`;
