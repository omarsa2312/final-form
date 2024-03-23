import { Form, Field, FormSpy } from "react-final-form"
import createDecorator from "final-form-focus";

const MyApp = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const showResults = async (values) => {
    await sleep(500);
    window.alert(JSON.stringify(values, undefined, 2));
  };
  const focusOnError = createDecorator();
  const required = (value) => (value ? undefined : "Required");
  return (
    /**Form Only requires a prop called on submit */
    <Form onSubmit={showResults} subscription={{ submitting: true }} decorators={[focusOnError]}>
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            validate={required}
            placeholder="Enter Your First Name"
            subscription={{
              value: true,
              error: true,
              touched: true,
            }}
          >
            {({ input, meta, placeholder }) => {
              return (
                <div>
                  <label>First Name</label>
                  <input {...input} placeholder={placeholder}></input>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              );
            }}
          </Field>
          <Field
            name="lastName"
            validate={required}
            placeholder="Enter Your Last Name"
            subscription={{
              value: true,
              error: true,
              touched: true,
            }}
          >
            {({ input, meta, placeholder }) => {
              return (
                <div>
                  <label>Last Name</label>
                  <input {...input} placeholder={placeholder}></input>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              );
            }}
          </Field>
          <Field
            name="email"
            validate={required}
            placeholder="Enter Your Email"
            subscription={{
              value: true,
              error: true,
              touched: true,
            }}
          >
            {({ input, meta, placeholder }) => {
              return (
                <div>
                  <label>Email</label>
                  <input {...input} placeholder={placeholder}></input>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              );
            }}
          </Field>
          <button type="submit" disabled={submitting}>
            {" "}
            Submit{" "}
          </button>
          <FormSpy subscription={{ values: true }}>
            {({ values }) => {
              return <pre>{JSON.stringify(values, undefined, 2)}</pre>;
            }}
          </FormSpy>
        </form>
      )}
    </Form>
  );
};

export default MyApp;
