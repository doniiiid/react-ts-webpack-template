const apiRoutes = (app: any) => {
  app.get("/test", (req: any, res: any) => {
    res.json({ data: "Hello World!" });
  });
};

export default apiRoutes;
