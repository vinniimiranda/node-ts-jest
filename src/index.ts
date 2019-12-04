import AppServer from './server';

const server = new AppServer();
try {
  server.listen(3000);
} catch (error) {
  console.log("Couldn't start the server, error::", error);
}
