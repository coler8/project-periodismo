import type { SuggestionSpanProps } from "./types";
import React, { Component } from "react";
import writeGood from "write-good";
import { Popover } from "antd";
import "./antd.css";

export class SuggestionSpan extends Component {
  props: SuggestionSpanProps;
  render() {

    let { suggestion, offsetKey, children } = this.props;

    return (

        <Popover title="¡Cuidado!" content={<a href={'https://www.google.com/search?q='+suggestion.reason} target="_blank">{suggestion.reason}</a>}>
          <span data-offset-key={offsetKey} className="suggestion">
            {children}
          </span>
        </Popover>
    );
  }
}

export function suggestionStrategy(contentBlock, callback) {
  let suggestions = writeGood(contentBlock.get("text")) || [];
  suggestions.forEach(suggestion => {
    callback(suggestion.index, suggestion.index + suggestion.offset, {
      suggestion: suggestion
    });
  });
}