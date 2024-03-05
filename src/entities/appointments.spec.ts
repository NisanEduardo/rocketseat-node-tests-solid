import { expect, test } from "vitest";
import { Appoitment } from "./appointment";

test("create an appoitment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 1);
  endsAt.setDate(endsAt.getDate() + 2);

  const appointment = new Appoitment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appoitment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointment with end date before date", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 2);
  endsAt.setDate(endsAt.getDate() + 1);

  expect(() => {
    return new Appoitment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test("cannot create an appointment with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() - 3);

  expect(() => {
    return new Appoitment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
