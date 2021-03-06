﻿import React from "react";

interface EmojiProps {
    emoji: string;
}

export default function Emoji(props: { className?: string } & EmojiProps) {
    const emojiString = props.emoji.startsWith("0x") ? String.fromCodePoint(Number(props.emoji)) : props.emoji;

    return (
        <span className={`inline-block ${props.className}`} style={{ width: "1.5em" }}>
            {emojiString}
        </span>
    );
}
