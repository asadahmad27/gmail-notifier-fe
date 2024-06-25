// src/components/EmailList.js

import React, { useEffect, useState } from "react";
import { database, realtimeDb, ref, onValue } from "../firebaseConfig";

const sanitizeKey = (key) => {
  return key?.replace(/[.#$/\[\]]/g, "_");
};

const EmailList = ({ userId = "asadahmaddev@gmail.com" }) => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      const emailRef = ref(realtimeDb, `emails/${sanitizeKey(userId)}`);
      onValue(
        emailRef,
        (snapshot) => {
          const data = snapshot.val();

          if (data) {
            const emailArray = Object.values(data);
            setEmails(emailArray);
          } else {
            setEmails([]);
          }
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching emails:", error);
          setLoading(false);
        }
      );
    }
  }, [userId]);

  return (
    <div>
      <h1>Email List for {userId}</h1>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>
            <h2>{email?.Subject}</h2>
            <p>
              <strong>From:</strong> {email?.From}
            </p>
            <p>
              <strong>Date:</strong> {email?.Date}
            </p>
            <p>
              <strong>Body:</strong> {email["text_plain"] || email["text_html"]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
