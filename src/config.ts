export const apiUrl =
    process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_APIURL
    : "http://localhost:4000"