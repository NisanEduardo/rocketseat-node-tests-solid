import { Appoitment } from "../entities/appointment";

interface CreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = Appoitment;

export class CreateAppointment {
  async execute({
    customer,
    startsAt,
    endsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appoitment({
      customer,
      startsAt,
      endsAt,
    });

    return appointment;
  }
}
