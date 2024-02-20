import Footer from "./components/footer";
import Header from "./components/header";
import HireSection from "./components/hire-section";
import Tech from "./pages/tech";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${Header}
  ${Tech}
  ${HireSection}
  ${Footer}
`;
