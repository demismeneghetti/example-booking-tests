import HomePage from "../pageobjects/home.page";
import SearchResultsPage from "../pageobjects/results.page";
// import SecurePage from '../pageobjects/secure.page';

describe("Booking", () => {
  beforeEach(async () => {
    await HomePage.open();
    await HomePage.acceptTerms();
  });

  /**
   * defineDestination
   *    - Não utilizar "Barcelona"   como exemplo, seletor apresenta ambiguidade
   *    e seleciona outros elementos na página
   */
  it("should accept to reserve a new traverl", async () => {
    let destination = "Porto";

    await HomePage.defineDestination(destination);

    const totalPropertiesFound =
      await SearchResultsPage.getTotalPropertiesFound();
    console.log("Total number of properties found:", totalPropertiesFound);

    const checkinDay = await SearchResultsPage.getCheckinDateNumber();
    console.log("Check-in day:", checkinDay);

    const checkoutDay = await SearchResultsPage.getCheckoutDateNumber();
    console.log("Check-out day:", checkoutDay);

    const nameOfAllProperties =
      await SearchResultsPage.getNameOfAllProperties();

    nameOfAllProperties.forEach((name) => {
      console.log("Property name:", name);
    });
  });
});
