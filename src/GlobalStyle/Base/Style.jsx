export default `
  .wrapper {
    padding: 10px 0px 15px 0px;
    font-size: 18px !important;
    width: 280px;
  }
  .title {
    font-size 21px !important;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .tall-margin-top {
    margin-top: 28px;
  }
  .medium-margin-top {
    margin-top: 16px;
  }
  .align-center {
    align-items: center;
  }
  .item {
    flex: 1;
    text-align: left;
  }
  .item-text-right {
    flex: 1;
    text-align: right;
  }
  @media (max-width: 600px) {
    .wrapper {
        width: 180px;
    }
  }
  .eulexia {
    font-family: 'Arial', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
  }
`
