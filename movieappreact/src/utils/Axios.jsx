import axiox from 'axios'

const instance = axiox.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGI4NmJlMmEwMDFjOTkwMWNkMTcxZWI1YTQyMWE5NSIsIm5iZiI6MTc1MTk1NDk5Ny41NjQ5OTk4LCJzdWIiOiI2ODZjYjYzNTY2NTE5MzlmYjg3MDMyNGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Qdv11J4-wfnrctIRgNac-1LP7ulTxQsNCi60hdnqmHU'
      }
});

export default instance;