import LexerReader from "../src/lexer";

import * as chai  from "chai";
import * as chai_interface from "chai-interface";
import {expect} from "chai";
chai.should();
chai.use(chai_interface);

describe("Lexer Reader Tests", () => {
  it("Simple Test 1", () => {
    let lr = new LexerReader("");
    expect(lr.next()).to.deep.equal({type: "eof", value: "", start: 0, end: 0});
  });
  it("Simple Test 2", () => {
    let lr = new LexerReader("one");
    expect(lr.next()).to.deep.equal({type: "token", value: "one", start: 0, end: 2});
    expect(lr.next()).to.deep.equal({type: "eof", value: "", start: 3, end: 3});
    expect(lr.next()).to.deep.equal({type: "eof", value: "", start: 3, end: 3});
  });
});