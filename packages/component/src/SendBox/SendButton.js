import PropTypes from 'prop-types';
import React from 'react';

import { localize } from '../Localization/Localize';
import connectToWebChat from '../connectToWebChat';
import IconButton from './IconButton';
import SendIcon from './Assets/SendIcon';

const connectSendButton = (...selectors) =>
  connectToWebChat(
    ({ disabled, language, sendBoxValue, setSendBox, submitSendBox }) => ({
      click: () => {
        setSendBox(sendBoxValue.trim());
        submitSendBox();
      },
      disabled,
      language,
      sendBoxValue
    }),
    ...selectors
  );

const SendButton = ({ click, disabled, language, sendBoxValue }) => {
  disabled = sendBoxValue ? false : true;

  return (
    <IconButton alt={localize('Send', language)} disabled={disabled} onClick={click}>
      <SendIcon />
    </IconButton>
  );
};

SendButton.defaultProps = {
  disabled: false
};

SendButton.propTypes = {
  click: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  language: PropTypes.string.isRequired,
  sendBoxValue: PropTypes.string.isRequired
};

export default connectSendButton()(SendButton);

export { connectSendButton };
