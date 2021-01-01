export default `
  .eulexia-wrapper {
    padding: 10px 0px 15px 0px;
    font-size: 18px !important;
    width: 280px;
  }
  .eulexia-title {
    font-size 21px !important;
  }
  .eulexia-row {
    display: flex;
    flex-direction: row;
  }
  .eulexia-column {
    display: flex;
    flex-direction: column;
  }
  .eulexia-tall-margin-top {
    margin-top: 28px;
  }
  .eulexia-medium-margin-top {
    margin-top: 16px;
  }
  .eulexia-align-center {
    align-items: center;
  }
  .eulexia-item {
    flex: 1;
    text-align: left;
  }
  .eulexia-item-text-right {
    flex: 1;
    text-align: right;
  }
  @media (max-width: 600px) {
    .eulexia-wrapper {
        width: 180px;
    }
  }
  .eulexia {
    font-family: 'Arial', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
  }
`
