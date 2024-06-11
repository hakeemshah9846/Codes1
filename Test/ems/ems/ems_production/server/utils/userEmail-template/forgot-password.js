exports.forgotPassword = function (name, url) {
    return new Promise(async (resolve, reject) => {
      try {
        let template = `
              <html style="box-sizing: border-box; --bs-blue: #0d6efd; --bs-indigo: #6610f2; --bs-purple: #6f42c1; --bs-pink: #d63384; --bs-red: #dc3545; --bs-orange: #fd7e14; --bs-yellow: #ffc107; --bs-green: #198754; --bs-teal: #20c997; --bs-cyan: #0dcaf0; --bs-black: #000; --bs-white: #fff; --bs-gray: #6c757d; --bs-gray-dark: #343a40; --bs-gray-100: #f8f9fa; --bs-gray-200: #e9ecef; --bs-gray-300: #dee2e6; --bs-gray-400: #ced4da; --bs-gray-500: #adb5bd; --bs-gray-600: #6c757d; --bs-gray-700: #495057; --bs-gray-800: #343a40; --bs-gray-900: #212529; --bs-primary: #0d6efd; --bs-secondary: #6c757d; --bs-success: #198754; --bs-info: #0dcaf0; --bs-warning: #ffc107; --bs-danger: #dc3545; --bs-light: #f8f9fa; --bs-dark: #212529; --bs-primary-rgb: 13, 110, 253; --bs-secondary-rgb: 108, 117, 125; --bs-success-rgb: 25, 135, 84; --bs-info-rgb: 13, 202, 240; --bs-warning-rgb: 255, 193, 7; --bs-danger-rgb: 220, 53, 69; --bs-light-rgb: 248, 249, 250; --bs-dark-rgb: 33, 37, 41; --bs-white-rgb: 255, 255, 255; --bs-black-rgb: 0, 0, 0; --bs-body-color-rgb: 33, 37, 41; --bs-body-bg-rgb: 255, 255, 255; --bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)); --bs-body-font-family: var(--bs-font-sans-serif); --bs-body-font-size: 1rem; --bs-body-font-weight: 400; --bs-body-line-height: 1.5; --bs-body-color: #212529; --bs-body-bg: #fff; --bs-border-width: 1px; --bs-border-style: solid; --bs-border-color: #dee2e6; --bs-border-color-translucent: rgba(0, 0, 0, 0.175); --bs-border-radius: 0.375rem; --bs-border-radius-sm: 0.25rem; --bs-border-radius-lg: 0.5rem; --bs-border-radius-xl: 1rem; --bs-border-radius-2xl: 2rem; --bs-border-radius-pill: 50rem; --bs-link-color: #0d6efd; --bs-link-hover-color: #0a58ca; --bs-code-color: #d63384; --bs-highlight-bg: #fff3cd;">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <style>
                        body, html {
                            padding: 0px !important;
                            margin: 0px !important;
                            font-family: sans-serif !important;
                          }
                          .logo {
                            max-height: 70px !important;
                          }
                      
                          .container {
                            padding-top: 20px;
                            padding-bottom: 20px;
                            padding-left: 100px;
                            padding-right: 100px;
                          }
                      
                          .banner {
                            background-color: #48BA81 !important;
                          }
                      
                          .pt-3 {
                            padding-top: 1rem !important;
                          }
                      
                          .pb-3 {
                            padding-bottom: 1rem !important;
                          }
                      
                          .p-3 {
                            padding: 1rem !important;
                          }
                      
                          .mt-3 {
                            margin-top: 1rem !important;
                          }
                      
                          .mt-4 {
                            margin-top: 1.5rem !important;
                          }
                      
                          .mt-5 {
                            margin-top: 3rem !important;
                          }
                      
                          .mb-5 {
                            margin-bottom: 3rem !important;
                          }
                      
                          .mb-5 {
                            margin-bottom: 3rem !important;
                          }
                      
                          .text-justify {
                            text-align: justify;
                            text-justify: inter-word;
                          }
                      
                          .text-muted {
                            color: #6c757d !important;
                          }
                      
                          .text-dark {
                            color: #000000 !important;
                          }
                      
                          .text-warning {
                            color: #ff8800 !important;
                          }
                      
                          .text-white {
                            color: #ffffff !important;
                          }
                      
                          .text-decoration-none {
                            text-decoration: none !important;
                          }
                      
                          .d-block {
                            display: block !important;
                          }
                      
                          .border-bottom{
                            border-bottom: 1px solid rgb(214, 214, 214);
                          }
                      
                          .table-responsive {
                            overflow-x: auto;
                            -webkit-overflow-scrolling: touch;
                          }
                      
                          .table {
                            width: 100%;
                            margin-bottom: 1rem;
                            vertical-align: top;
                            border-spacing:0;
                            border-collapse: collapse;
                          }
                      
                          .table-bg{
                            background-color: #f3f3f3;
                          }
                          
                          .btn {
                              
                                align-items: center;
                                padding: 6px 14px;
                                font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
                                border-radius: 6px;
                                border: none;
                                background: #6E6D70;
                                box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
                                color: #DFDEDF;
                              
                          }
                          
                          .btn:hover {
                              color: #6E6D70;
                              background:#DFDEDF ;
                          }
                          
                          .warning-text {
                              font-size : 12;
                          }
                          
                    </style>
                </head>
  
                <body>
                    <div class="col-12 pt-3 pb-3 banner">
                        <div class="container text-white">
                            <h2>Reset Your Password</h2>
                        </div>
                    </div>
                    <div class="container mt-3 mb-5">
                        <div class="p-3">
                            <div>Hi ${name},</div>
                            <p>Forgot your password?</p>
                            <p>We recieved a request to reset the password for your account.</p>
                            <p>To reset your password click on the button below: </p>
                            <a href="${url}"> <button class = "btn">Reset Password</button> </a>
                            <div class="mb-3 text-justify mt-3">
                              <span class="text-dark">
                                    <!--add any text here-->
                                Or copy and paste the url into your browser:
                              </span>
                              <br><br>
                              <b class="text-warning">${url}</b>
                              <br><br>
                              <span class="text-dark">
                                 <br><br>
                              <span class="text-dark" class="warning-text">
                                  <div class="warning-text">
                             Please do not show or forward it to third parties.
                                <br><br>
                              The information contained in this message is intended for the addressee only and may contain classified information. If you are not the addressee, please delete this message and notify the sender; you should not copy or distribute it or disclose its contents to anyone.
                              </div>
                              </span>
                              <br><br><br><br>
                              <span class="text-muted text-justify mt-3">
                                <br><br>
                                <br>
                                <br><br>
                              </span>
                            </div>
                        </div>
                    </div>
                </body>
            </html>                 
              `;
        resolve(template);
      }
      catch (error) {
        //console.log(error);
        reject(error);
      }
    })
  };