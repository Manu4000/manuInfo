export function Footer() {
  return (
    <footer class="footer py-4 background">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start text-light">
            Copyright &copy; Manuel Torres 2023
          </div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a
              class="btn btn-light btn-social mx-2"
              href="https://github.com/Manu4000"
              aria-label="Facebook"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              class="btn btn-light btn-social mx-2"
              href="https://www.instagram.com/manutorres_2000/"
              aria-label="instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div className="col-lg-4 text-lg-end text-light">
            <p>Desarrollado por Manuel Torres</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
