import { connectToDB } from "@/lib/db";
import participants from "@/models/EventRegistration";

export async function POST(request) {
  const { name, email, event, admNumber, phone } = await request.json();
  if (!name || !email || !event || !admNumber || !phone) {
    return Response.json({
      status: 400,
      body: { message: "Please fill all fields" },
    });
  }
  try {
    await connectToDB();
    const newParticipant = new participants({
      name,
      email,
      event,
      admNumber,
      phone,
    });
    const num = await participants.findOne({ email });
    if (num == admNumber) {
      return Response.json({
        status: 400,
        body: { message: "Email already exists" },
      });
    }

    await newParticipant.save();
    return Response.json({
      status: 200,
      body: { message: "Successfully registered", newParticipant },
    });
  } catch (err) {
    return Response.json({
      status: 500,
      body: { message: "Internal server error" },
    });
  }
}
