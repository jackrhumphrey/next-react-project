export default function Page() {
  async function submitForm(formData) {
    "use server";
    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log(formFields);
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main style={{ background: `#ccc` }}>
        <h1>Contact</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              style={{ background: `#fff` }}
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              style={{ background: `#fff` }}
              id="message"
              name="message"
              rows="4"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
