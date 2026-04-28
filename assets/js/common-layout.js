const sharedHeader = String.raw`<div class="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
		<div data-elementor-type="wp-post" data-elementor-id="101" class="elementor elementor-101"
			data-elementor-post-type="elementskit_template">

			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />



				<style>
					.elementor-element-4eff56d4>.elementor-container {
						max-width: 1600px !important;
						width: 100%;
						padding-left: 20px;
						/* optional */
						padding-right: 20px;
						/* optional */
					}

					.elementor-101 .elementor-element.elementor-element-f7dc0c5 img {
						width: 80% !important;
					}
				</style>

				<style>
					.floating_btn {
						position: fixed;
						bottom: 30px;
						right: 2px;
						width: 100px;
						height: 100px;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						z-index: 1000;
					}

					@keyframes pulsing {
						to {
							box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
						}
					}

					.contact_icon {
						background-color: #42db87;
						color: #fff;
						width: 53px;
						height: 53px;
						font-size: 30px;
						border-radius: 50px;
						text-align: center;
						box-shadow: 2px 2px 3px #999;
						display: flex;
						align-items: center;
						justify-content: center;
						transform: translatey(0px);
						animation: pulse 1.5s infinite;
						box-shadow: 0 0 0 0 #42db87;
						-webkit-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
						-moz-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
						-ms-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
						animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
						font-weight: normal;
						font-family: sans-serif;
						text-decoration: none !important;
						transition: all 300ms ease-in-out;
					}

					/* Desktop: menu always visible */
					@media (min-width: 1025px) {
						.jkit-menu-wrapper {
							display: block !important;
							position: relative;
							top: auto;
							left: auto;
							right: auto;
							background: transparent;
						}
					}

					/* Mobile: menu hidden by default, shown when active */
					@media (max-width: 1024px) {
						.jkit-menu-wrapper {
							display: block !important;
							position: fixed;
							top: 0;
							left: 0;
							right: auto;
							width: min(360px, 86vw);
							height: 100vh;
							max-height: 100vh;
							background: #fff;
							z-index: 10000;
							opacity: 0;
							visibility: hidden;
							transform: translateX(-105%);
							transform-origin: left center;
							pointer-events: none;
							transition: opacity 0.3s ease, transform 0.32s ease, visibility 0.32s ease;
						}

						.jkit-menu-wrapper.active {
							opacity: 1;
							visibility: visible;
							transform: translateX(0);
							pointer-events: auto;
						}

						.jkit-overlay {
							display: block;
							inset: 0;
							background: rgba(8, 21, 39, 0.48);
							z-index: 9997;
							opacity: 0;
							visibility: hidden;
							pointer-events: none;
							transition: opacity 0.28s ease, visibility 0.28s ease;
						}

						.jkit-overlay.active {
							opacity: 1;
							visibility: visible;
							pointer-events: auto;
						}
					}

					@media (max-width: 1024px) {
						.elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu {
							position: relative;
						}

						.elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper {
							padding-top: 74px;
							overflow-y: auto;
							max-height: 100vh;
							border-radius: 0 24px 24px 0;
						}

						.elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel {
							position: absolute;
							top: 14px;
							right: 14px;
							z-index: 2;
						}

						.elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu {
							border-width: 0;
							border-radius: 999px;
							color: #fff;
							background: #ff5421;
							width: 42px;
							height: 42px;
							display: inline-flex;
							align-items: center;
							justify-content: center;
							margin: 0 !important;
							box-shadow: 0 10px 24px rgba(255, 84, 33, 0.28);
						}
					}


					/* Mobile dropdown styling */
					@media (max-width: 1024px) {

						/* Hide submenus by default */
						.jkit-menu .sub-menu {
							display: none;
							position: relative !important;
							/* ensure it stays inside mobile menu */
							background: #fff;
							padding: 10px 0;
							margin: 0;
							list-style: none;
							width: 100%;
							box-shadow: none;
						}

						/* Submenu items */
						.jkit-menu .sub-menu li a {
							display: block;
							padding: 10px 20px;
							color: #333;
							/* visible text color */
							text-decoration: none;
						}

						/* Hover/active effect */
						.jkit-menu .sub-menu li a:hover {
							background: #f0f0f0;
						}
					}
				</style>

				<div class="floating_btn">
					<a target="_blank"
						href="https://api.whatsapp.com/send/?phone=447495002234&amp;text&amp;type=phone_number">

						<div class="contact_icon">

							<i class="fa fa-whatsapp my-float"></i>
						</div>
					</a>
				</div>

				<!-- head links start -->
				<section data-particle_enable="false" data-particle-mobile-disabled="false"
					class=" elementor-section elementor-top-section elementor-element elementor-element-4eff56d4 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
					data-id="4eff56d4" data-element_type="section">
					<div class=" main-header elementor-container elementor-column-gap-no">
						<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-263a6c27"
							data-id="263a6c27" data-element_type="column"
							data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-f7dc0c5 elementor-widget elementor-widget-image"
									data-id="f7dc0c5" data-element_type="widget" data-widget_type="image.default">
									<div class="elementor-widget-container">
										<a href="index.html">
											<img fetchpriority="high" width="548" height="246"
												src="assets/images/logo-badminton-boy.png"
												class="attachment-full size-full wp-image-25262" alt=""
												decoding="async" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5de4271c"
							data-id="5de4271c" data-element_type="column"
							data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-10280071 elementor-widget elementor-widget-jkit_nav_menu"
									data-id="10280071" data-element_type="widget"
									data-widget_type="jkit_nav_menu.default">
									<div class="elementor-widget-container">
										<div class="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_80__673d83aab5e2b"
											data-item-indicator="&lt;i aria-hidden=&quot;true&quot; class=&quot;jki jki-chevron-down-light&quot;&gt;&lt;/i&gt;">
											<button aria-label="open-menu" class="jkit-hamburger-menu">
												<i aria-hidden="true" class="jki jki-bars-solid"></i>
											</button>
											<div class="jkit-menu-wrapper">
								<div class="jkit-menu-container">
									<ul id="menu-main_menu"
										class="jkit-menu jkit-menu-direction-flex jkit-submenu-position-top">
										<li id="menu-item-120"
											class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-120">
											<a href="index.html" aria-current="page">Home</a>
										</li>
										<li id="menu-item-121"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-121">
											<a href="meettheteam.html">Meet the Team</a>
										</li>
										<li id="menu-item-122"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-122">
											<a href="tournaments.html">Tournament</a>
										</li>
										<li id="menu-item-123"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-123">
											<a href="aboutus.html">About Us</a>
										</li>
										<li id="menu-item-124"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-124">
											<a href="oursessions.html">Our Sessions</a>
										</li>
										<li id="menu-item-1241"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1241">
											<a href="sponsors.html">Sponsors</a>
										</li>
										<li id="menu-item-125"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-125">
											<a href="payment.html">Payments</a>
										</li>
										<li id="menu-item-126"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-126">
											<a href="contactus.html">Contact Us</a>
										</li>
										<li id="menu-item-127"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
											<a href="gallery.html">Gallery</a>
										</li>
										<li id="menu-item-128"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-128">
											<a href="trainingwear.html">Training Wear</a>
										</li>
										<li id="menu-item-129"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-129">
											<a href="leagues.html">Leagues</a>
										</li>
										<li id="menu-item-130"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
											<a href="joinplayer.html">Join Us</a>
										</li>
									</ul>
								</div>
								<div class="jkit-nav-identity-panel">
									<button aria-label="close-menu" class="jkit-close-menu">
										<svg aria-hidden="true" class="e-font-icon-svg e-fas-times"
											viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
											</path>
										</svg>
									</button>
								</div>
							</div>
											<div class="jkit-overlay"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-275dcbc7"
							data-id="275dcbc7" data-element_type="column"
							data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-199a5290 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button"
									data-id="199a5290" data-element_type="widget" data-widget_type="button.default">
									<div class="elementor-widget-container">
										<div class="elementor-button-wrapper">
											<a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-float"
												href="payment.html" target="_blank">
												<span class="elementor-button-content-wrapper">
													<span class="elementor-button-text">Payments</span>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>



		</div>
	</div>`;

const sharedThemeStyles = `
  :root {
    --bb-primary: #0c2340;
    --bb-primary-soft: #143d6b;
    --bb-accent: #ff5421;
    --bb-accent-strong: #de4617;
    --bb-surface: #f4f7fb;
    --bb-text: #162c43;
    --bb-muted: #60748a;
    --bb-border: rgba(12, 35, 64, 0.12);
    --bb-shadow: 0 18px 40px rgba(12, 35, 64, 0.14);
  }

  body {
    background: var(--bb-surface);
    color: var(--bb-text);
  }

  body.bb-menu-open {
    overflow: hidden;
  }

  a,
  button,
  input,
  textarea {
    transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  }

  .main-header {
    background: linear-gradient(135deg, rgba(12, 35, 64, 0.98) 0%, rgba(20, 61, 107, 0.96) 100%);
    border-radius: 0 0 26px 26px;
    box-shadow: 0 18px 42px rgba(8, 21, 39, 0.22);
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .main-header .jkit-menu > li > a,
  .main-header .jkit-menu > li > a:visited {
    color: #f8fbff !important;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .main-header .jkit-menu > li > a:hover,
  .main-header .jkit-menu > li.current-menu-item > a,
  .main-header .jkit-menu > li.current_page_item > a {
    color: var(--bb-accent) !important;
  }

  .main-header .jkit-hamburger-menu {
    background: var(--bb-accent);
    color: #fff;
    border-radius: 14px;
    box-shadow: 0 12px 24px rgba(255, 84, 33, 0.28);
    transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
  }

  .main-header .jkit-hamburger-menu:hover {
    background: var(--bb-accent-strong);
  }

  .main-header .jkit-hamburger-menu[aria-expanded="true"] {
    transform: rotate(90deg);
    box-shadow: 0 14px 28px rgba(255, 84, 33, 0.34);
  }

  .main-header img {
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.16));
  }

  @media (min-width: 1025px) {
    .main-header {
      padding-left: 18px;
      padding-right: 18px;
    }

    .main-header .elementor-element.elementor-element-263a6c27 {
      width: 18% !important;
    }

    .main-header .elementor-element.elementor-element-5de4271c {
      width: 64% !important;
    }

    .main-header .elementor-element.elementor-element-275dcbc7 {
      width: 18% !important;
    }

    .main-header .elementor-element.elementor-element-10280071,
    .main-header .elementor-element.elementor-element-10280071 .elementor-widget-container,
    .main-header .elementor-element.elementor-element-10280071 .jkit-menu-wrapper,
    .main-header .elementor-element.elementor-element-10280071 .jkit-menu-container {
      width: 100%;
    }

    .main-header .jkit-menu {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 4px 16px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .main-header .jkit-menu > li {
      float: none;
    }

    .main-header .jkit-menu > li > a,
    .main-header .jkit-menu > li > a:visited {
      display: block;
      font-size: 0.82rem;
      line-height: 1.35;
      padding: 6px 0;
      text-align: center;
      white-space: nowrap;
    }

    .main-header .elementor-button-wrapper {
      display: flex;
      justify-content: flex-end;
    }

    .main-header .elementor-button {
      white-space: nowrap;
    }
  }

  .elementor-button,
  button[type="submit"],
  input[type="submit"],
  .wpforms-submit,
  .wpcf7-submit {
    background: var(--bb-accent) !important;
    border-color: var(--bb-accent) !important;
    color: #fff !important;
    border-radius: 999px !important;
    box-shadow: 0 12px 24px rgba(255, 84, 33, 0.22);
  }

  .elementor-button:hover,
  button[type="submit"]:hover,
  input[type="submit"]:hover,
  .wpforms-submit:hover,
  .wpcf7-submit:hover {
    background: var(--bb-accent-strong) !important;
    border-color: var(--bb-accent-strong) !important;
    transform: translateY(-1px);
  }

  .ekit-template-content-footer .elementor-top-section {
    background: linear-gradient(180deg, #0b1e35 0%, #143d6b 100%);
    color: #f8fbff;
  }

  .ekit-template-content-footer .elementor-heading-title,
  .ekit-template-content-footer p,
  .ekit-template-content-footer .elementor-icon-list-text,
  .ekit-template-content-footer .elementor-icon-list-text a {
    color: #f8fbff !important;
  }

  .ekit-template-content-footer a {
    color: #dbe6f3;
  }

  .ekit-template-content-footer a:hover {
    color: #ffb197;
  }

  .ekit-template-content-footer .elementor-icon-list-icon svg {
    fill: var(--bb-accent);
  }

  .ekit-template-content-footer iframe {
    width: 100%;
    max-width: 100%;
    border-radius: 18px;
    box-shadow: var(--bb-shadow);
  }

  .ekit-template-content-footer .elementor-social-icon {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    padding: 8px;
  }

  .ekit-template-content-footer .elementor-social-icon:hover {
    background: var(--bb-accent);
    border-color: var(--bb-accent);
    color: #fff !important;
  }

  .ekit-template-content-footer .elementor-social-icon:hover svg {
    fill: #fff;
  }

  @media (max-width: 1024px) {
    .main-header {
      border-radius: 0 0 22px 22px;
    }

    body.bb-menu-open {
      overflow: hidden;
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: auto !important;
      width: min(360px, 100%) !important;
      height: 100vh !important;
      max-height: 100vh !important;
      padding: 74px 0 24px !important;
      margin: 0 !important;
      display: block !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      border-radius: 0 24px 24px 0 !important;
      background: linear-gradient(180deg, #0c2340 0%, #143d6b 100%) !important;
      box-shadow: 0 18px 36px rgba(8, 21, 39, 0.28) !important;
      backdrop-filter: blur(10px);
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper.active {
      left: 0 !important;
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu-container {
      display: block !important;
      width: 100% !important;
      height: auto !important;
      overflow: visible !important;
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu {
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      justify-content: flex-start !important;
      width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: visible !important;
      list-style: none !important;
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li {
      display: block !important;
      width: 100% !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li:last-child {
      border-bottom: 0;
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li > a,
    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li a {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      width: 100% !important;
      padding: 14px 22px !important;
      color: #f8fbff !important;
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu {
      background: rgba(255, 255, 255, 0.05) !important;
      padding: 0 0 12px !important;
      margin: 0 !important;
      width: 100% !important;
    }

    .elementor-101 .elementor-element.elementor-element-10280071 .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li a:hover {
      background: rgba(255, 84, 33, 0.18) !important;
      color: #fff !important;
    }
  }
`;

const sharedFooter = String.raw`<div class="ekit-template-content-markup ekit-template-content-footer ekit-template-content-theme-support">
		<div data-elementor-type="wp-post" data-elementor-id="111" class="elementor elementor-111"
			data-elementor-post-type="elementskit_template">
			<section data-particle_enable="false" data-particle-mobile-disabled="false"
				class="elementor-section elementor-top-section elementor-element elementor-element-2c37e88d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
				data-id="2c37e88d" data-element_type="section"
				data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
				<div class="elementor-background-overlay"></div>
				<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-456935b7"
						data-id="456935b7" data-element_type="column">
						<div class="elementor-widget-wrap elementor-element-populated">
							<section data-particle_enable="false" data-particle-mobile-disabled="false"
								class="elementor-section elementor-inner-section elementor-element elementor-element-5a7b2c4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
								data-id="5a7b2c4" data-element_type="section">
								<div class="elementor-container elementor-column-gap-no">
									<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-50711d13"
										data-id="50711d13" data-element_type="column"
										data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
										<div class="elementor-widget-wrap elementor-element-populated">
											<div class="elementor-element elementor-element-4ea51791 elementor-widget elementor-widget-image"
												data-id="4ea51791" data-element_type="widget"
												data-widget_type="image.default">
												<div class="elementor-widget-container">
													<a href="index-.html">
														<img width="648" height="246"
															src="assets/images/logo-badminton-boy.png"
															class="attachment-full size-full wp-image-25262" alt=""
															decoding="async" /> </a>
												</div>
											</div>
											<div class="elementor-element elementor-element-615c5946 elementor-widget elementor-widget-text-editor"
												data-id="615c5946" data-element_type="widget"
												data-widget_type="text-editor.default">
												<div class="elementor-widget-container">
													<p style=" word-spacing: -2px;font-size;15px">Welcome to  Batminton  Boys,
														the ultimate destination for intermediate-level badminton
														players (Category C &amp; D) who love both the thrill of
														competition and the fun of social play!</p>
												</div>
											</div>
											<div class="elementor-element elementor-element-4dd5ccd7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
												data-id="4dd5ccd7" data-element_type="widget"
												data-widget_type="icon-list.default">
												<div class="elementor-widget-container">
													<ul class="elementor-icon-list-items"
														style="list-style-type:none!important;">
														<li class="elementor-icon-list-item">
															<a href="https://maps.app.goo.gl/AscwP61rupyjPTik6"
																target="_blank">

																<span class="elementor-icon-list-icon"
																	style="font-size:12px">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-map-marker-alt"
																		viewBox="0 0 384 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Hamptons Sports and Leisure, Tydemans, Great Baddow, Chelmsford CM2 9FH, United Kingdom</span>
															</a>
														</li>
														<li class="elementor-icon-list-item d-flex">
															<a href="mailto:myclub_uk@gmail.com"
																style="display:flex;">
																<span class="elementor-icon-list-icon"
																	style="margin-top:9px; font-size:15px;">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-envelope"
																		viewBox="0 0 512 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
																		</path>
																	</svg> </span>
																<span
																	class="elementor-icon-list-text">myclub_uk@gmail.com</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<span class="elementor-icon-list-icon">
																<a href="https://api.whatsapp.com/send/?phone=447495002234&amp;text=Hello&amp;app_absent=0"
																	target="_blank">
																	<i aria-hidden="true" class="fa fa-whatsapp"
																		style="font-size:17px"></i>
															</span>
															<span class="elementor-icon-list-text">+44 7495 002234</span>

															</a>
														</li>








													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-586f235f"
										data-id="586f235f" data-element_type="column">
										<div class="elementor-widget-wrap elementor-element-populated">
											<div class="elementor-element elementor-element-480caa74 elementor-widget elementor-widget-heading"
												data-id="480caa74" data-element_type="widget"
												data-widget_type="heading.default">
												<div class="elementor-widget-container">
													<h4 class="elementor-heading-title elementor-size-default">Quick
														Links</h4>
												</div>
											</div>
											<div class="elementor-element elementor-element-3d73393 elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
												data-id="3d73393" data-element_type="widget"
												data-widget_type="icon-list.default">
												<div class="elementor-widget-container">
													<ul class="elementor-icon-list-items"
														style="list-style-type:none!important;">
														<li class="elementor-icon-list-item">
															<a href="index.html" target="_blank">
																<style>
																	.elementor-icon-list-icon {
																		font-size: 9px;

																	}

																	.elementor-icon-list-text {
																		padding: 7px;
																	}
																</style>
																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="false"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg></span>
																<span class="elementor-icon-list-text">Home</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="aboutus.html" target="_blank">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">About Us</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="leagues.html" target="_blank">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Events</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="gallery.html" target="_blank">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Gallery</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="contactus.html" target="_blank">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Contact Us</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-497f1c86"
										data-id="497f1c86" data-element_type="column">
										<div class="elementor-widget-wrap elementor-element-populated">
											<div class="elementor-element elementor-element-5d2e96f2 elementor-widget elementor-widget-heading"
												data-id="5d2e96f2" data-element_type="widget"
												data-widget_type="heading.default">
												<div class="elementor-widget-container">
													<h4 class="elementor-heading-title elementor-size-default">Documents</h4>
												</div>
											</div>
											<div class="elementor-element elementor-element-34d2bdfa elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
												data-id="34d2bdfa" data-element_type="widget"
												data-widget_type="icon-list.default">
												<div class="elementor-widget-container">
													<ul class="elementor-icon-list-items"
														style="list-style-type:none!important;">
														<li class="elementor-icon-list-item">
															<a href="https://form.jotform.com/242541970763360" target="_blank" rel="noopener noreferrer">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Online Adult Joining Form</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="https://form.jotform.com/242874557644368" target="_blank" rel="noopener noreferrer">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Online Junior Joining Form</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="clubaccreditation.html" target="_blank">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Club Accreditation</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="safeguarding.html" target="_blank">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Safeguarding</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="codeofethics.html" target="_blank">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Code of Ethics</span>
															</a>
														</li>
														<li class="elementor-icon-list-item">
															<a href="termsandconditions.html" target="_blank">

																<span class="elementor-icon-list-icon">
																	<svg aria-hidden="true"
																		class="e-font-icon-svg e-fas-chevron-right"
																		viewBox="0 0 320 512"
																		xmlns="http://www.w3.org/2000/svg">
																		<path
																			d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
																		</path>
																	</svg> </span>
																<span class="elementor-icon-list-text">Terms and Conditions</span>
															</a>
														</li>


													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-8514a62"
										data-id="8514a62" data-element_type="column">
										<div class="elementor-widget-wrap elementor-element-populated">
											<div class="elementor-element elementor-element-3e4bfb7 elementor-widget elementor-widget-html"
												data-id="3e4bfb7" data-element_type="widget"
												data-widget_type="html.default">
												<div class="elementor-widget-container">
													<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.5663598792785!2d0.4863964769741789!3d51.717008295368835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8e9891daba79d%3A0x6f9bd172d96e51d0!2sHamptons%20Sports%20and%20Leisure!5e1!3m2!1sen!2sin!4v1775293630381!5m2!1sen!2sin" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
												</div>
											</div>
											<div class="elementor-element elementor-element-034cacf e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
												data-id="034cacf" data-element_type="widget"
												data-widget_type="social-icons.default">
												<div class="elementor-widget-container" style="margin-top:10px">
													<div class="elementor-social-icons-wrapper elementor-grid">
														<span class="elementor-grid-item" style="padding-left:20px">
															<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-38f1ff5"
																style="font-size:25px"
																href="https://www.facebook.com/profile.php?id=61566172904886"
																target="_blank">
																<span class="elementor-screen-only">Facebook</span>
																<svg class="e-font-icon-svg e-fab-facebook"
																	viewBox="0 0 512 512"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
																	</path>
																</svg>
															</a>
														</span>
														<span class="elementor-grid-item" style="padding-left:20px">
															<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-9f32674"
																style="font-size:25px"
																href="https://www.instagram.com/badmintonboys2024"
																target="_blank">
																<span class="elementor-screen-only">Instagram</span>
																<svg class="e-font-icon-svg e-fab-instagram"
																	viewBox="0 0 448 512"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
																	</path>
																</svg>
															</a>
														</span>
														<span class="elementor-grid-item" style="padding-left:20px">
															<a class="elementor-icon elementor-social-icon elementor-social-icon-x-twitter elementor-repeater-item-7a37fdb"
																style="font-size:25px"
																href="https://www.badmintonboys.com" target="_blank">
																<span class="elementor-screen-only">X-twitter</span>
																<svg class="e-font-icon-svg e-fab-x-twitter"
																	viewBox="0 0 512 512"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
																	</path>
																</svg>
															</a>
														</span>
														<span class="elementor-grid-item" style="padding-left:20px">
															<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-fe27cff"
																style="font-size:25px"
																href="contactus.html"
																target="_blank">
																<span class="elementor-screen-only">Linkedin</span>
																<svg class="e-font-icon-svg e-fab-linkedin"
																	viewBox="0 0 448 512"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
																	</path>
																</svg>
															</a>
														</span>
														<span class="elementor-grid-item" style="padding-left:20px">
															<a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-aa30aff"
																style="font-size:25px"
																href="https://www.youtube.com/@badmintonboys-t8v"
																target="_blank">
																<span class="elementor-screen-only">Youtube</span>
																<svg class="e-font-icon-svg e-fab-youtube"
																	viewBox="0 0 576 512"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
																	</path>
																</svg>
															</a>
														</span>
														<span class="elementor-grid-item" style="padding-left:20px">
															<a class="elementor-icon elementor-social-icon elementor-social-icon-meetup elementor-repeater-item-55f781d"
																style="font-size:25px"
																href="https://www.badmintonboys.com"
																target="_blank">
																<span class="elementor-screen-only">Meetup</span>
																<svg class="e-font-icon-svg e-fab-meetup"
																	viewBox="0 0 512 512"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z">
																	</path>
																</svg>
															</a>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section data-particle_enable="false" data-particle-mobile-disabled="false"
								class="elementor-section elementor-inner-section elementor-element elementor-element-56b9eec5 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
								data-id="56b9eec5" data-element_type="section">
								<div class="elementor-container elementor-column-gap-no">
									<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-46ef0fc8"
										data-id="46ef0fc8" data-element_type="column">
										<div class="elementor-widget-wrap elementor-element-populated">
											<div class="elementor-element elementor-element-2c6c6f8 elementor-widget elementor-widget-text-editor"
												data-id="2c6c6f8" data-element_type="widget"
												data-widget_type="text-editor.default">
												<div class="elementor-widget-container">
													<p>Badminton Boys
														<br /><strong style="font-size: 10px;">Powered by: </strong><a
															class="colwos" style="font-size: 13px; color: white;"
															href="https://badmintonboys.com/" target="_blank"
															rel="noopener">Life Hopes</a>
													</p> 
												</div>
											</div>
										</div>
									</div>
									<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-22ea3ba9"
										data-id="22ea3ba9" data-element_type="column">
										<div class="elementor-widget-wrap elementor-element-populated">
											<div class="elementor-element elementor-element-6d25ddec elementor-widget elementor-widget-text-editor"
												data-id="6d25ddec" data-element_type="widget"
												data-widget_type="text-editor.default">
												<div class="elementor-widget-container">
													<p>Copyright Â© 2026. All rights reserved.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</section>`;

function mountSharedSection(id, markup) {
  const container = document.getElementById(id);
  if (!container) {
    return;
  }

  container.innerHTML = markup;
}

function ensureSharedThemeStyles() {
  if (document.getElementById('bb-shared-theme')) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'bb-shared-theme';
  style.textContent = sharedThemeStyles;
  document.head.appendChild(style);
}

function initializeMenu() {
  const headerRoot = document.getElementById('site-header');
  if (!headerRoot) {
    return;
  }

  const navRoot = headerRoot.querySelector('.jkit-nav-menu');
  const hamburger = headerRoot.querySelector('.jkit-hamburger-menu');
  const menuWrapper = headerRoot.querySelector('.jkit-menu-wrapper');
  const menuContainer = headerRoot.querySelector('.jkit-menu-container');
  const menuList = headerRoot.querySelector('#menu-main_menu');
  const closeBtn = headerRoot.querySelector('.jkit-close-menu');
  const overlay = headerRoot.querySelector('.jkit-overlay');
  const dropdownItems = headerRoot.querySelectorAll('.menu-item-has-children');
  const navLinks = headerRoot.querySelectorAll('#menu-main_menu a[href]');
  const topLevelItems = headerRoot.querySelectorAll('#menu-main_menu > li');
  const topLevelLinks = headerRoot.querySelectorAll('#menu-main_menu > li > a');
  const mobileBreakpoint = 1024;

  if (!menuWrapper) {
    return;
  }

  if (navRoot) {
    navRoot.classList.add('bb-menu-ready');
  }

  const applyMenuState = (isOpen) => {
    if (window.innerWidth > mobileBreakpoint) {
      menuWrapper.classList.remove('active');
      menuWrapper.style.display = '';
      menuWrapper.style.opacity = '';
      menuWrapper.style.visibility = '';
      menuWrapper.style.transform = '';
      menuWrapper.style.pointerEvents = '';
      menuWrapper.style.position = '';
      menuWrapper.style.top = '';
      menuWrapper.style.left = '';
      menuWrapper.style.right = '';
      menuWrapper.style.width = '';
      menuWrapper.style.height = '';
      menuWrapper.style.maxHeight = '';
      menuWrapper.style.padding = '';
      menuWrapper.style.overflowY = '';
      menuWrapper.style.overflowX = '';
      menuWrapper.style.background = '';
      menuWrapper.style.borderRadius = '';
      menuWrapper.style.boxShadow = '';
      menuWrapper.setAttribute('aria-hidden', 'false');

      if (menuContainer) {
        menuContainer.style.display = '';
        menuContainer.style.width = '';
        menuContainer.style.height = '';
        menuContainer.style.overflow = '';
      }

      if (menuList) {
        menuList.style.display = '';
        menuList.style.flexDirection = '';
        menuList.style.alignItems = '';
        menuList.style.justifyContent = '';
        menuList.style.width = '';
        menuList.style.height = '';
        menuList.style.minHeight = '';
        menuList.style.margin = '';
        menuList.style.padding = '';
        menuList.style.overflow = '';
        menuList.style.listStyle = '';
      }

      topLevelItems.forEach((item, index) => {
        item.style.display = '';
        item.style.width = '';
        item.style.borderBottom = '';
        if (index === topLevelItems.length - 1) {
          item.style.borderBottom = '';
        }
      });

      topLevelLinks.forEach((link) => {
        link.style.display = '';
        link.style.alignItems = '';
        link.style.justifyContent = '';
        link.style.width = '';
        link.style.padding = '';
        link.style.color = '';
      });

      if (overlay) {
        overlay.classList.remove('active');
        overlay.style.display = '';
        overlay.style.opacity = '';
        overlay.style.visibility = '';
        overlay.style.pointerEvents = '';
      }

      document.body.classList.remove('bb-menu-open');
      if (hamburger) {
        hamburger.setAttribute('aria-expanded', 'false');
      }
      return;
    }

    menuWrapper.style.display = 'block';
    menuWrapper.style.position = 'fixed';
    menuWrapper.style.top = '0';
    menuWrapper.style.left = '0';
    menuWrapper.style.right = 'auto';
    menuWrapper.style.width = 'min(360px, 86vw)';
    menuWrapper.style.height = '100vh';
    menuWrapper.style.maxHeight = '100vh';
    menuWrapper.style.padding = '74px 0 24px';
    menuWrapper.style.overflowY = 'auto';
    menuWrapper.style.overflowX = 'hidden';
    menuWrapper.style.background = 'linear-gradient(180deg, #0c2340 0%, #143d6b 100%)';
    menuWrapper.style.borderRadius = '0 24px 24px 0';
    menuWrapper.style.boxShadow = '0 18px 36px rgba(8, 21, 39, 0.28)';
    menuWrapper.style.opacity = isOpen ? '1' : '0';
    menuWrapper.style.visibility = isOpen ? 'visible' : 'hidden';
    menuWrapper.style.transform = isOpen ? 'translateX(0)' : 'translateX(-105%)';
    menuWrapper.style.pointerEvents = isOpen ? 'auto' : 'none';
    menuWrapper.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    menuWrapper.classList.toggle('active', isOpen);

    if (menuContainer) {
      menuContainer.style.display = 'block';
      menuContainer.style.width = '100%';
      menuContainer.style.height = 'auto';
      menuContainer.style.overflow = 'visible';
    }

    if (menuList) {
      menuList.style.display = 'flex';
      menuList.style.flexDirection = 'column';
      menuList.style.alignItems = 'stretch';
      menuList.style.justifyContent = 'flex-start';
      menuList.style.width = '100%';
      menuList.style.height = 'auto';
      menuList.style.minHeight = '0';
      menuList.style.margin = '0';
      menuList.style.padding = '0';
      menuList.style.overflow = 'visible';
      menuList.style.listStyle = 'none';
    }

    topLevelItems.forEach((item, index) => {
      item.style.display = 'block';
      item.style.width = '100%';
      item.style.borderBottom = index === topLevelItems.length - 1
        ? '0'
        : '1px solid rgba(255, 255, 255, 0.08)';
    });

    topLevelLinks.forEach((link) => {
      link.style.display = 'flex';
      link.style.alignItems = 'center';
      link.style.justifyContent = 'space-between';
      link.style.width = '100%';
      link.style.padding = '14px 22px';
      link.style.color = '#f8fbff';
    });

    document.body.classList.toggle('bb-menu-open', isOpen);

    if (overlay) {
      overlay.style.display = 'block';
      overlay.style.opacity = isOpen ? '1' : '0';
      overlay.style.visibility = isOpen ? 'visible' : 'hidden';
      overlay.style.pointerEvents = isOpen ? 'auto' : 'none';
      overlay.classList.toggle('active', isOpen);
    }

    if (hamburger) {
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  };

  const syncMobileMenuMode = () => {
    applyMenuState(false);
  };

  const openMenu = () => {
    applyMenuState(true);
  };

  const closeMenu = () => {
    applyMenuState(false);
  };

  const toggleMenu = (event) => {
    event.stopPropagation();
    if (menuWrapper.classList.contains('active')) {
      closeMenu();
      return;
    }

    openMenu();
  };

  if (hamburger) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', toggleMenu);
  }

  syncMobileMenuMode();

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('click', (event) => {
    if (!menuWrapper.classList.contains('active')) {
      return;
    }

    if (!menuWrapper.contains(event.target) && (!hamburger || !hamburger.contains(event.target))) {
      closeMenu();
    }
  });

  dropdownItems.forEach((item) => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('.sub-menu');

    if (!link || !submenu) {
      return;
    }

    link.addEventListener('click', (event) => {
      if (window.innerWidth > mobileBreakpoint) {
        return;
      }

      event.preventDefault();
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const parentItem = link.closest('.menu-item-has-children');
      if (window.innerWidth > mobileBreakpoint || parentItem) {
        return;
      }

      closeMenu();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuWrapper.classList.contains('active')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    syncMobileMenuMode();

    if (window.innerWidth <= mobileBreakpoint) {
      return;
    }

    closeMenu();
    headerRoot.querySelectorAll('.sub-menu').forEach((submenu) => {
      submenu.style.display = '';
    });
  });
}

function syncActiveNavigation() {
  const headerRoot = document.getElementById('site-header');
  if (!headerRoot) {
    return;
  }

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const links = headerRoot.querySelectorAll('#menu-main_menu a[href]');

  links.forEach((link) => {
    link.removeAttribute('aria-current');
    const item = link.closest('li');
    if (item) {
      item.classList.remove('current-menu-item', 'current_page_item');
    }
  });

  const currentLink = Array.from(links).find((link) => link.getAttribute('href') === currentFile)
    || Array.from(links).find((link) => currentFile === '' && link.getAttribute('href') === 'index.html');

  if (!currentLink) {
    return;
  }

  currentLink.setAttribute('aria-current', 'page');
  const currentItem = currentLink.closest('li');
  if (currentItem) {
    currentItem.classList.add('current-menu-item', 'current_page_item');
  }
}

function initializeCommonLayout() {
  ensureSharedThemeStyles();
  mountSharedSection('site-header', sharedHeader);
  mountSharedSection('site-footer', sharedFooter);
  initializeMenu();
  syncActiveNavigation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCommonLayout);
} else {
  initializeCommonLayout();
}
