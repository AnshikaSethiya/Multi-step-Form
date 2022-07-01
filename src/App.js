import LinearStepper from "./Components/LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} style={{marginTop:'9%'}}>
        <Paper component={Box} p={3} style={{padding:'1rem'}}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;