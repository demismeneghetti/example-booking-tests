import Page from "./page";

class SearchResultsPage extends Page {
  get labelTotalPropertiesFound() {
    return $("//h1");
  }

  get labelCheckinCheckoutDate() {
    return $$("//form//div[3]//button");
  }

  get labelNameOfAllProperties() {
    return $$("//h3/a/div[1]");
  }

  async getTotalPropertiesFound() {
    const value = await this.labelTotalPropertiesFound.getText();
    return parseInt(value.replace(",", "").match(/[0-9]+/)[0]);
  }

  async getCheckinDateNumber() {
    const dateNumber = await this.labelCheckinCheckoutDate[0].getText();
    return parseInt(dateNumber.charAt(0));
  }

  async getCheckoutDateNumber() {
    const dateNumber = await this.labelCheckinCheckoutDate[1].getText();
    return parseInt(dateNumber.charAt(0));
  }

  async getNameOfAllProperties() {
    let propertiesName = [];
    const allLabels = await this.labelNameOfAllProperties;
    for (const label of allLabels) {
      const contentValue = await label.getText();
      propertiesName.push(contentValue);
    }
    return propertiesName;
  }
}

export default new SearchResultsPage();
