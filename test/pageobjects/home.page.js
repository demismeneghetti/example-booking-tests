import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  get inputDestination() {
    return $("[name=ss]");
  }

  get inputData() {
    return $('[data-testid="searchbox-dates-container"]');
  }

  get buttonAcceptTerms() {
    return $("[id=onetrust-accept-btn-handler]");
  }

  get buttonSubmit() {
    return $("//*[.='Search']");
  }

  get elementCalendarAtualMonth() {
    return $$("//div[1]/table//td/span");
  }

  get elementCalendarNextMonth() {
    return $$("//div[2]/table//td/span");
  }

  get autocompleteDestination() {
    return $("//form//div/ul/li");
    //   '[role="listbox"]'
    //   "div[data-destination-input]"
    //   'div[data-testid="destination-container"]'
    //   '[data-testid="autocomplete-results"]'
  }

  async acceptTerms() {
    if (await this.buttonAcceptTerms.isClickable) {
      await this.buttonAcceptTerms.click();
    }
  }

  async defineDestination(destination) {
    await this.inputDestination.clearValue();
    await this.inputDestination.setValue(destination);
    await this.autocompleteDestination.$(`//*[.="${destination}"]`).click();

    let date;
    // Definir a data de ida
    date = await this.elementCalendarNextMonth[0];
    await date.click();

    // Definir a data de retorno
    date = await this.elementCalendarNextMonth[6];
    await date.click();
    // Search
    const buttonSubmit = await this.buttonSubmit;
    await buttonSubmit.waitForClickable({ timeout: 3000 });
    await buttonSubmit.click();
  }

  async getAutocompleteDestination() {
    this.autocompleteDestination.forEach(async (element) => {
      if (await $(element).isDisplayed) {
        return element;
      }
    });
  }

  normalize(context) {
    return context.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return browser.url("/index.en-gb.html");
  }
}

export default new HomePage();
