const request = require("supertest");
const app = require("../app");
const { disconnect } = require("./db_test");

const from = "643e912774c75764ac0cf8f9";
const to = "9a4b8d63e18fdde9a15cb648";

afterAll(() => {
  disconnect();
});

describe("POST /api/messages/addmsg", () => {
  it("should return 200 OK", async () => {
    await request(app)
      .post("/api/messages/addmsg")
      .send({
        from: from,
        message: "This is a test message",
        read: false,
        to: to,
      })
      .expect(200)
      .then((res) => {
        expect(res.body.msg).toBe("Message added successfully.");
      });
  }, 10000);
});

describe("GET /api/messages/getmsg", () => {
  it("should return 200 OK", async () => {
    await request(app)
      .post("/api/messages/getmsg")
      .send({
        from: from,
        to: to,
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toBeDefined();
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].fromSelf).toBe(true);
        expect(res.body[0].message).toBe("This is a test message");
      });
  }, 10000);
});
