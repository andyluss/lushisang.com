import { useShape } from "@electric-sql/react";

function TodoApp() {
  const { data } = useShape({
    url: "https://api.electric-sql.cloud/v1/shape",
    params: {
      table: "tasks",
      source_id: "ead24d38-3500-4cee-aa3c-3b4d31e05a33",
      source_secret:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb3VyY2VfaWQiOiJlYWQyNGQzOC0zNTAwLTRjZWUtYWEzYy0zYjRkMzFlMDVhMzMiLCJpYXQiOjE3NDQ5NDU4MzR9.vIgIgcenaMUQisrR6vSTrHhGuGtuzk4E_ptp8yaG8Ak",
    },
  });

  return (
    <pre>
      {JSON.stringify(
        data,
        (_key, value) => (typeof value === "bigint" ? value.toString() : value),
        2,
      )}
    </pre>
  );
}

export default TodoApp;
