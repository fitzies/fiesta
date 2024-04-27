"use server";

import axios from "axios";

export async function update(data: FormData) {
  const res = await axios({
    method: "get",
    url: "https://api.jsonbin.io/v3/b/662d2138ad19ca34f8609caf",
    headers: {
      // "Content-Type": "application/json",
      "X-Master-Key":
        "$2a$10$PUVrxT.9h6QXyxKC.f0nmOIpnNb8nI7O9gcI4pBb4XPMfJQgQ/7Ca",
      "X-Access-Key":
        "$2a$10$ttcXb9HaUfCheJaQiVacS.u4/k0lr5utLQzOfh1v6DB20PIkZkhp2",
    },
  });

  let emails: string[] = res.data.record.emails;
  const newEmail = data.get("email")!;
  emails.push(newEmail.toString());

  let final = await axios({
    method: "put",
    url: "https://api.jsonbin.io/v3/b/662d2138ad19ca34f8609caf",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key":
        "$2a$10$PUVrxT.9h6QXyxKC.f0nmOIpnNb8nI7O9gcI4pBb4XPMfJQgQ/7Ca",
      "X-Access-Key":
        "$2a$10$ttcXb9HaUfCheJaQiVacS.u4/k0lr5utLQzOfh1v6DB20PIkZkhp2",
    },
    data: {
      emails,
    },
  });
}
