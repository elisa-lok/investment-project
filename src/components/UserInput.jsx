export default function UserInput({ onChangeInput, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            name="initial-investment"
            value={userInput.initialInvestment}
            required
            onChange={(event) => {
              onChangeInput("initialInvestment", event.target.value);
            }}
          />
        </p>

        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annual-investment"
            value={userInput.annualInvestment}
            required
            onChange={(event) => {
              onChangeInput("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            name="expected-return"
            value={userInput.expectedReturn}
            required
            onChange={(event) => {
              onChangeInput("expectedReturn", event.target.value);
            }}
          />
        </p>

        <p>
          <label>DURATION</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            required
            onChange={(event) => {
              onChangeInput("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </div>
  );
}
