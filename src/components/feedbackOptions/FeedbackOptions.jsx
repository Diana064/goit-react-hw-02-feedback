export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="">
      {options.map(name => {
        return (
          <li className="" key={name}>
            <button
              className=""
              type="button"
              onClick={onLeaveFeedback}
              name={name}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
