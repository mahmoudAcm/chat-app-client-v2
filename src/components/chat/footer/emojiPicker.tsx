import React, { createRef, useEffect, useState } from 'react';
import Picker from 'emoji-picker-react';
import './styles.css';

export const emojiElement = createRef<HTMLDivElement>();

interface emojiProps {
  target: HTMLTextAreaElement;
}

const Emoji = ({ target }: emojiProps) => {
  const [chosenEmoji, setChosenEmoji] = useState<any>(null);

  const onEmojiClick = (_: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
    if (target.setSelectionRange) {
      let pos = target.selectionStart;
      const newVal =
        target.value.slice(0, pos) +
        emojiObject.emoji +
        target.value.slice(pos);
      target.value = newVal;
      target.focus();
      target.setSelectionRange(
        Math.min(newVal.length, pos + 2),
        Math.min(newVal.length, pos + 2),
      );
    }
  };

  return (
    <div className="emojiPicker fade" ref={emojiElement}>
      {chosenEmoji ? (
        <span>
          You chose:{' '}
          <span title="copy the emoji and use it">{chosenEmoji.emoji}</span>
        </span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} disableSkinTonePicker={true} />
    </div>
  );
};

export default Emoji;
