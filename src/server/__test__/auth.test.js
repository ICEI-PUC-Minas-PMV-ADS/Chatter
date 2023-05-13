const request = require("supertest");
const app = require("../app");
const { disconnect } = require("./db_test");
const { v4: uuidv4 } = require('uuid');

global.onlineUsers = new Map();

const guid = uuidv4();
const username = `test${guid}`;
const email = `test${guid}@test.com`;
const password = "teste";
const avatarImage = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzEgMjMxIj48cGF0aCBkPSJNMzMuODMsMzMuODNhMTE1LjUsMTE1LjUsMCwxLDEsMCwxNjMuMzQsMTE1LjQ5LDExNS40OSwwLDAsMSwwLTE2My4zNFoiIHN0eWxlPSJmaWxsOiNmZjk3MDA7Ii8+PHBhdGggZD0ibTExNS41IDUxLjc1YTYzLjc1IDYzLjc1IDAgMCAwLTEwLjUgMTI2LjYzdjE0LjA5YTExNS41IDExNS41IDAgMCAwLTUzLjcyOSAxOS4wMjcgMTE1LjUgMTE1LjUgMCAwIDAgMTI4LjQ2IDAgMTE1LjUgMTE1LjUgMCAwIDAtNTMuNzI5LTE5LjAyOXYtMTQuMDg0YTYzLjc1IDYzLjc1IDAgMCAwIDUzLjI1LTYyLjg4MSA2My43NSA2My43NSAwIDAgMC02My42NS02My43NSA2My43NSA2My43NSAwIDAgMC0wLjA5OTYxIDB6IiBzdHlsZT0iZmlsbDojYjk2NDM4OyIvPjxwYXRoIGQ9Im05MS45MiAxOTQuNDFhMTAxLjQ3IDEwMS40NyAwIDAgMSAyMy41OCAxNy4wOSAxMDEuNDcgMTAxLjQ3IDAgMCAxIDIzLjU4LTE3LjA5YzAuODkgMC4xOSAxLjc4IDAuMzggMi42NyAwLjU5YTExNC43OSAxMTQuNzkgMCAwIDEgMzggMTYuNSAxMTUuNTMgMTE1LjUzIDAgMCAxLTEyOC40NiAwIDExNC43OSAxMTQuNzkgMCAwIDEgMzgtMTYuNWMwLjg4LTAuMjEgMS43OC0wLjQgMi42Ny0wLjU5eiIgc3R5bGU9ImZpbGw6I2ZmMDAwMDsiLz48cGF0aCBkPSJtNzMuNjUgMTk5LjgyYzE2LjU5IDguMjMgMjguNzIgMTguOTEgMzQuMjcgMzAuOTNhMTE0Ljg2IDExNC44NiAwIDAgMS01Ni42NS0xOS4yNSAxMTUuMDYgMTE1LjA2IDAgMCAxIDIyLjM4LTExLjY4eiIgc3R5bGU9ImZpbGw6I2ZmYzEwNzsiLz48cGF0aCBkPSJtNjAuNjMgMjA1Ljg1YzEyLjM1IDUuOTQgMjEuOTMgMTMuNDQgMjcuNTkgMjEuOTFhMTE0LjcgMTE0LjcgMCAwIDEtMzYuOTUtMTYuMjZxNC41My0zIDkuMzYtNS42NXoiIHN0eWxlPSJmaWxsOiNmZjAwMDA7Ii8+PHBhdGggZD0ibTE1Ny4zNSAxOTkuODJjLTE2LjYgOC4yMy0yOC43MiAxOC45MS0zNC4yNyAzMC45M2ExMTQuODYgMTE0Ljg2IDAgMCAwIDU2LjY1LTE5LjI1IDExNS4wNiAxMTUuMDYgMCAwIDAtMjIuMzgtMTEuNjh6IiBzdHlsZT0iZmlsbDojZmZjMTA3OyIvPjxwYXRoIGQ9Im0xNzAuMzcgMjA1Ljg1Yy0xMi4zNSA1Ljk0LTIxLjkzIDEzLjQ0LTI3LjU5IDIxLjkxYTExNC43IDExNC43IDAgMCAwIDM2Ljk1LTE2LjI2cS00LjUzLTMtOS4zNi01LjY1eiIgc3R5bGU9ImZpbGw6I2ZmMDAwMDsiLz48cGF0aCBkPSJtNTcuNTM0IDE0Mi4wM2MtNi45MzgzLTMxLjc1LTAuNTcyOTQtNTIuNTc3IDE0LjE3NC02Mi4zNDQgMjIuNTYyLTEyLjI4MyA2Mi4wODItMTIuMjIyIDgzLjQ4NC0xLjg4NDYgMjEuMzQ4IDExLjE3NyAyMi4xMjQgMzcuMzk2IDE4LjQ5OCA2My43MzMgOC4xMjc5LTE0LjE1NSAxMy4xNjQtMzEuNTk4IDE0LjA4NS00OC45MDIgMS4wODI4LTExLjc5NS0xLjE3NTYtMTguODY2LTcuNDgzMy0yNy45NzItMjYuNDY1LTM3LjY4NS0xMDMuNDUtMzEuNTYtMTI5LjY2LTIuODM3Mi03Ljg1MDQgOS40NjE1LTkuNjAwNiAxNy40NzgtOS4yNzUgMjYuNjY3IDEuMDAyNCAxOC42NjcgNi45Njg4IDM4LjUwOCAxNi4xOCA1My41NHoiIHN0eWxlPSJmaWxsOiNmZjk4MDk7Ii8+PHBhdGggZD0ibTExMS4yNiAzLjA0MjNjLTYuMDEzIDAuMTEyOC0xMi42MjkgMi42OTI0LTE1LjI5MSA3LjkwODItMS4xNjc2IDMuMjM4My0xLjY3NTggNi4yMDY5LTEuNjc1OCA4Ljg5MjYgMC44OTIyOC0wLjI2NjEgMS44MDA1LTAuNTE2NCAyLjcyNjYtMC43NDQxIDMuNzUwMi0xLjA2NzIgNy40ODUxLTEuNzEzNSAxMS4xMjktMS45OTgxIDEuMTAwNy0wLjA4NiAyLjE5NTMtMC4xMzkxIDMuMjc3My0wLjE2MDFoMmUtM2M1LjY5NjktMC4xMTMzIDExLjA5IDAuNjYwMyAxNS45MDQgMi4wNTI3IDAuMDU1Mi0zLjA0Mi0wLjcwNjk2LTUuOTgyNC0yLjE3MzgtOC41LTEuODQxMS0zLjE1OTktNC43MDMzLTUuNTU2OC04LjQyOTctNi44MjYyLTEuNjg4My0wLjQ5NTItMy41MTYzLTAuNjYyLTUuNDY4OC0wLjYyNXptMy4wNjY0IDE3LjQ0OWMtMC42OTMxNy0wLjAxLTEuMzkxOS0wLjAxLTIuMDkzOCAwaC0yZS0zYy0xLjE1OTEgMC4wMTktMi4zMzI2IDAuMDY0LTMuNTExNyAwLjEzODYtMy45MDM1IDAuMjQ2LTcuOTAyNSAwLjgwNjEtMTEuOTIgMS43Mjg1LTE1LjE1OSAzLjAwNzUtMjYuNDY5IDkuOTI3OS0yMi4wNjggMTkuNjgyIDIyLjg5MS04Ljc3NzMgNTIuMzE1LTEwLjQwMyA3Ni4wMjMtMi4yMTI5IDIuMTQxNC05LjU1MjktMTQuOTM5LTE5LjA4MS0zNi40MjgtMTkuMzR6IiBzdHlsZT0iZmlsbDojZmY5ODA5OyIvPjxwYXRoIGQ9Im0xNjUuNjIgMTYuOTgxYy0wLjg1NzUgMC0xLjk0MDYgMC41NDM4OS0zLjM0NzYgMS4zNTc0LTcuMzM4MiA0Ljc2NTItMTMuNDUyIDEwLjg2Ny0xOS41MTYgMTguMzYzIDkuMjczNCAyLjE4MjUgMTcuOTAzIDUuNjcwNiAyNS4yMTMgMTAuNjA0IDEuMTUxMi05LjEyNjMgMS45MTM3LTE4LjUwMyAwLjA1NS0yNi45OTYtMC41Ny0yLjQxODQtMS4zMDE3LTMuMzI2Ny0yLjQwNDMtMy4zMjgxem0tMTA0LjA5IDEuNjkzNGMtMS4xMDI2IDAtMS44MzQyIDAuOTExNjUtMi40MDQzIDMuMzMwMS0xLjg3OTQgOC41ODY5LTEuMDgwNiAxOC4wNzggMC4wOTIgMjcuMjk5IDcuMDU1OS00LjY2MzggMTUuNjg3LTguMzY2NyAyNS4xMTEtMTAuOTg0LTYuMDQzLTcuNDYwMS0xMi4xMzktMTMuNTM3LTE5LjQ1MS0xOC4yODUtMS40MDctMC44MTM1My0yLjQ5MDEtMS4zNjA1LTMuMzQ3Ny0xLjM1OTR6IiBzdHlsZT0iZmlsbDpub25lOyIvPjxwYXRoIGQ9Im0xNjIuNDUgMTYuNjg2Yy0yLjMxNzUgMmUtMyAtNC42Mjc2IDAuNTc2MDgtNi44OTI2IDEuNjY4LTguNDc2OCA2LjAxNTUtMTEuMTEzIDEzLjM0OS0xMC4xMzMgMTkuNzg3IDEwLjMyMyAyLjcwNzcgMTkuNzYyIDcuMDY1OCAyNy4zNDYgMTMuMjc5IDkuODQ4LTQuOTM2MyAxMS4zMi0xNy4xMzcgNC42MTUyLTI1Ljg1Mi00LjcxMDQtNi4xMjIyLTkuODM3MS04Ljg4NzgtMTQuOTM2LTguODgyOHptLTk3LjMxOCA0LjEzODdjLTIuNDU2OSAwLjA1NTYtNS4xNjQyIDAuNTQ0NzQtOC4xMTcyIDEuNTE3Ni0xMy40ODcgNC40NDMzLTE5LjA2IDIxLjIxNS0zLjY0ODQgMzEuODQgNy4yNDc2LTYuMDY5NCAxNi45NjEtMTAuODk2IDI3Ljg5Mi0xNC4yMjkgMC4yMTkzLTMuMzI0MS0wLjMyMDEtNy4wODE3LTEuODY5MS0xMS4yMzYtMi44MDQ5LTQuODQ0NS03LjIyMzMtNy43MjEtMTMuMjIxLTcuODkwNi0wLjM0MDgtMC4wMS0wLjY4NjEtMC4wMS0xLjAzNzEtMmUtM3oiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PHBhdGggZD0ibTk3LjU2IDEwNy44NGExMC42MyAxMC42MyAwIDAgMS0xNSAwLjEzbC0wLjEzLTAuMTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo2LjNweDtzdHJva2U6IzAwMDsiLz48cGF0aCBkPSJtMTQ4LjU5IDEwNy44NGExMC42MyAxMC42MyAwIDAgMS0xNSAwLjEzbC0wLjEzLTAuMTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo2LjNweDtzdHJva2U6IzAwMDsiLz48cGF0aCBkPSJtMTE1LjUgMTUzLjkzYTE0IDE0IDAgMCAxLTEwLjUtNC42OSAzLjQyMDkgMy40MjA5IDAgMCAxIDUtNC42N2wwLjA4IDAuMDggMC4wOCAwLjA5YTcuMzUgNy4zNSAwIDAgMCAxMC4zOSAwLjM3bDAuMzctMC4zN2EzLjQyMDYgMy40MjA2IDAgMSAxIDUuMjMgNC40MWwtMC4wOCAwLjA5YTE0IDE0IDAgMCAxLTEwLjUzIDQuNjl6IiAvPjxwYXRoIGQ9Im0xMTUuMjcgMTI3LjMyYy03LjY2MjctMC4wMy0xNS4yNTEgMS40NDE5LTIwLjY0NiA1LjE0NjUtNy42MiA1LjMzLTkuOTA1MyAxMS41MTItMTQuMTI3IDE4LjEwOS0zLjQzNzkgNS4yNDQ3LTkuMzI2IDEwLjAyNC0xMy40NjcgNi4zMzQgMjUuNDI1IDI5Ljc1NSA3MS40MDkgMjkuNzg2IDk2Ljg3NSAwLjA2NjQtNi44MTA0IDMuOTMwNS0xMS41NDUtMi40Ny0xMy41MDgtNi40MDA0LTEwLjY5Ny0xNy42MDUtMTQuMTE1LTIyLjY1Ni0zNS4xMjctMjMuMjU2em0tMC4yNjc1OCA4LjM5ODRjNy40NTcgMC4wODAyIDE0Ljk4NiAxLjI5NjYgMTcuMTQ2IDUuOTUyMiAyLjU3NjUgMTEuMzE5LTcuNTg3OCAxNy40NTQtMTYuNjgxIDE3LjUxNS02LjA5LTAuMDUtMTIuMi0yLjM4MDItMTUuMjYtNy43NDAyLTYuMzYtMTEuMTYgMy42MzQ5LTE1LjYwNyAxNC43OTUtMTUuNzI3eiIgc3R5bGU9ImZpbGw6IzNhNDg0YTsiLz48L3N2Zz4=";
let _id = "";

afterAll(() => {
  disconnect();
});

describe("POST /api/auth/register", () => {
  it("should return 200 OK", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        username,
        email,
        password,
      })
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe(true);
        expect(res.body.user.username).toBe(username);
        expect(res.body.user.email).toBe(email);
      });
  }, 10000);

  it("should return user already in use", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        username,
        email,
        password,
      })
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe(false);
        expect(res.body.msg).toBe('Usuario já esta sendo utilizado!');
      });
  }, 10000);
});

describe("POST /api/auth/login/:id", () => {
  it("Should return 200 ok", async () => {
    await request(app)
      .post("/api/auth/login")
      .send({
        username,
        password,
      })
      .expect(200)
      .then((res) => {
        expect(res.body.status).toBe(true);
        expect(res.body.user.username).toBe(username);
        expect(res.body.user.email).toBe(email);
        expect(typeof res.body.user._id).toBe('string');
        _id = res.body.user._id;
      });
  });
})

describe("GET /api/auth/setavatar/:id", () => {
  it("Should return 200 ok", async () => {
    await request(app)
    .get(`/api/auth/allusers/${_id}`)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeDefined();
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBeGreaterThan(0);
    });
  })
})

describe("POST /api/auth/setavatar/:id", () => {
  it("Should return 200 ok", async () => {
    await request(app)
      .post(`/api/auth/setavatar/${_id}`)
      .send({
        image: avatarImage
      })
      .expect(200)
      .then((res) => {
        expect(res.body.isSet).toBe(true);
        expect(res.body.image).toBe(avatarImage);
      });
  });
})

describe("GET /api/auth/logout/:id", () => {
  it("Should return 200 ok", async () => {
    await request(app)
    .get(`/api/auth/logout/${_id}`)
    .expect(200);
  })
})