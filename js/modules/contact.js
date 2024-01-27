export function getHTMLContact() {
    let html =
        `<form class="vh-100 d-flex flex-column align-items-center justify-content-center">

        <div class="row w-75">
            <div class="col-md-6">
                <div class="form-content">
                    <input type="text" id="form-name" class="form-control mt-4" placeholder="Enter Your Name">
                    <div id="form-name-alert" class="alert alert-danger text-center p-3 mt-1 mb-0 d-none" role="alert">
                        Special characters and numbers not allowed
                    </div>
                </div>

            </div>
            <div class="col-md-6">
                <div class="form-content">
                    <input type="text" id="form-email" class="form-control mt-4" placeholder="Enter Your Email">
                    <div id="form-email-alert" class="alert alert-danger text-center p-3 mt-1 mb-0 d-none" role="alert">
                        Email not valid *exemple@yyy.zzz
                    </div>
                </div>
            </div>
        </div>

        <div class="row w-75">
            <div class="col-md-6">
                <div class="form-content">
                    <input type="text" id="form-phone" class="form-control mt-4" placeholder="Enter Your Phone">
                    <div id="form-phone-alert" class="alert alert-danger text-center p-3 mt-1 mb-0 d-none" role="alert">
                        Enter valid Phone Number
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-content">
                    <input type="text" id="form-age" class="form-control mt-4" placeholder="Enter Your Age">
                    <div id="form-age-alert" class="alert alert-danger text-center p-3 mt-1 mb-0 d-none" role="alert">
                        Enter valid age
                    </div>
                </div>
            </div>
        </div>
        <div class="row w-75">
            <div class="col-md-6">
                <div class="form-content">
                    <input type="password" id="form-password" class="form-control mt-4" placeholder="Enter Your Password">
                    <div id="form-password-alert" class="alert alert-danger text-center p-3 mt-1 mb-0 d-none" role="alert">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-content">
                    <input type="password" id="form-repassword" class="form-control mt-4" placeholder="Repassword">
                    <div id="form-repassword-alert" class="alert alert-danger text-center p-3 mt-1 mb-0 d-none" role="alert">
                        Enter valid Repassword
                    </div>
                </div>
            </div>
        </div>

            <div class="col-md-12 d-flex justify-content-center">
                <button id="form-btn" class="btn btn-danger disabled mt-4">Send</button>
            </div>
        </div>
    </form>`;
    return html;
}
