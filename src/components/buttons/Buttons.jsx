// export const Buttons = ({ buttons, onLeaveFeedback }) => {
//   return (
//     <div>
//       {buttons.map(button => (
//         <div
//           key={button}
//           name={button}
//           type="button"
//           onClick={onLeaveFeedback}
//         ></div>
//       ))}
//     </div>
//   );
// };
import React from 'react';

const Buttons = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <div>
    <button onClick={onClickGood}>good</button>
    <button onClick={onClickNeutral}>neutral</button>
    <button onClick={onClickBad}>bad</button>
  </div>
);
export default Buttons;
