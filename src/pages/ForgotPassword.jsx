function ForgotPassword() {
  return (
    <main id="forgot-password-container">
      <section>
        <div class="form-panel">
          <div class="form-content">
            <header>
              <div class="logo">
                <img
                  src="../assets/icons/money-wallet.png"
                  alt="wallet"
                  width="32"
                />
                <span>E-Wallet</span>
              </div>
            </header>

            <h1>Fill Out Form Correctly 👋</h1>
            <p class="subtitle">We will send new password to your email</p>

            <form action="#" method="POST">
              <div class="input-group">
                <label for="email">Email</label>
                <div class="input-wrapper">
                  <img
                    src="../assets/icons/mail.svg"
                    alt="Email Icon"
                    class="icon-left"
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>

              <button type="submit" class="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ForgotPassword;
