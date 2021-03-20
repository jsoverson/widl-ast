/**
 * The enum type representing the token kinds values.
 */
export enum TokenKind {
  EOF = 1,
  BANG,
  QUESTION,
  DOLLAR,
  PAREN_L,
  PAREN_R,
  SPREAD,
  COLON,
  EQUALS,
  AT,
  BRACKET_L,
  BRACKET_R,
  BRACE_L,
  PIPE,
  BRACE_R,
  NAME,
  NS,
  INT,
  FLOAT,
  STRING,
  BLOCK_STRING,
  AMP,
  SOF,
  COMMENT,
}

export const TokenDescription = new Map<number, string>([
  [TokenKind.EOF, "EOF"],
  [TokenKind.BANG, "!"],
  [TokenKind.QUESTION, "?"],
  [TokenKind.DOLLAR, "$"],
  [TokenKind.PAREN_L, "("],
  [TokenKind.PAREN_R, ")"],
  [TokenKind.SPREAD, "..."],
  [TokenKind.COLON, ":"],
  [TokenKind.EQUALS, "="],
  [TokenKind.AT, "@"],
  [TokenKind.BRACKET_L, "["],
  [TokenKind.BRACKET_R, "]"],
  [TokenKind.BRACE_L, "{"],
  [TokenKind.PIPE, "|"],
  [TokenKind.BRACE_R, "}"],
  [TokenKind.NAME, "Name"],
  [TokenKind.NS, "NS"],
  [TokenKind.INT, "Int"],
  [TokenKind.FLOAT, "Float"],
  [TokenKind.STRING, "String"],
  [TokenKind.BLOCK_STRING, "BlockString"],
  [TokenKind.AMP, "&"],
  [TokenKind.SOF, "SOF"],
  [TokenKind.COMMENT, "Comment"],
]);