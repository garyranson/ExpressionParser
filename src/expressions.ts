export class Literal implements Expression {
  constructor(private raw: string, private value: any) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitLiteral(this.value, this.raw);
  }
}
export class LiteralString implements Expression {
  public type = "LiteralString";
  constructor(private raw: string) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitLiteral(this.raw, this.raw);
  }
}
export class LiteralNumber implements Expression {
  constructor(private value: number) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitLiteral(this.value, undefined);
  }
}
export class ScopedAccessorExpression implements Expression {
  public type = "ScopedAccessorExpression";
  constructor(private name: string) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitScopedAccessor(this.name);
  }
}
export class MemberAccessorExpression implements Expression {
  constructor(private object: Expression, private property: Expression, private computed: boolean) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitMember(this.object, this.property, this.computed);
  }
}
export class MemberCallExpression implements Expression {
  constructor(private object: Expression, private member: Expression, private args: Expression[]) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitMemberCall(this.object, this.member, this.args);
  }
}
export class ConditionalExpression implements Expression {
  constructor(private test: Expression, private consequent: Expression, private alternate: Expression) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitConditional(this.test, this.consequent, this.alternate);
  }
}
export class UnaryExpression implements Expression {
  constructor(private unaryType: string, private argument: Expression) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitUnary(this.unaryType, this.argument);
  }
}
export class CallExpression implements Expression {
  constructor(private callee: Expression, private args: Array<Expression>) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitCall(this.callee, this.args);
  }
}
export class ArrayExpression implements Expression {
  constructor(private elements: Array<Expression>) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitArray(this.elements);
  }
}
export class ObjectExpression implements Expression {
  constructor(private propertyNames: Array<string>, private expressions: Array<Expression>) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitObject(this.propertyNames, this.expressions);
  }
}
export class BinaryExpression implements Expression {
  constructor(private operator: string, private left: Expression, private right: Expression) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitBinary(this.operator, this.left, this.right);
  }
}
export class LogicalExpression implements Expression {
  constructor(private operator: string, private left: Expression, private right: Expression) {
  }

  visit<T>(visitor: Visitor<T>): T {
    return visitor.visitBinary(this.operator, this.left, this.right);
  }
}