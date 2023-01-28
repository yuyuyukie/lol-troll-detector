import { CustomScalar, Scalar } from "@nestjs/graphql";
import { Kind, ValueNode } from "graphql";

@Scalar("Date", (_type) => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = "Date custom scalar type";

  serialize(value: unknown): number {
    if (!(value instanceof Date)) {
      throw new Error("value is not Date object");
    }
    return value.getTime() / 1000; // value sent to the client
  }

  parseValue(value: unknown): Date {
    if (typeof value !== "number") {
      throw new Error("value is not number");
    }
    return new Date(value); // value from the client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    throw Error("parseLiteral");
  }
}
