import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Page01 from './page01'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
            <meta charset="utf-8" />
            <title>Apex chart | Skote - Responsive Bootstrap 4 Admin Dashboard</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
            <meta content="Themesbrand" name="author" />
            <link rel="shortcut icon" href="/template/assets/images/favicon.ico" />
            <link href="/template/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
            <link href="/template/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
            <link href="/template/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
      </Head>

      <main className={styles.main}>
      <div id="layout-wrapper">

<header id="page-topbar">
    <div className="navbar-header">
        <div className="d-flex">
            <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="/template/assets/images/logo.svg" alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src="/template/assets/images/logo-dark.png" alt="" height="17" />
                    </span>
                </a>

                <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="/template/assets/images/logo-light.svg" alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src="/template/assets/images/logo-light.png" alt="" height="19" />
                    </span>
                </a>
            </div>

            <button type="button" className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                <i className="fa fa-fw fa-bars"></i>
            </button>

            <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="bx bx-search-alt"></span>
                </div>
            </form>

            
        </div>

        <div className="d-flex">

            <div className="dropdown d-inline-block d-lg-none ml-2">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-magnify"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-search-dropdown">
        
                    <form className="p-3">
                        <div className="form-group m-0">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item waves-effect"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="" src="/template/assets/images/flags/us.jpg" alt="Header Language" height="16" />
                </button>
                <div className="dropdown-menu dropdown-menu-right">
      
                    <a href="#" className="dropdown-item notify-item">
                        <img src="/template/assets/images/flags/spain.jpg" alt="user-image" className="mr-1" height="12" /> <span className="align-middle">Spanish</span>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                        <img src="/template/assets/images/flags/germany.jpg" alt="user-image" className="mr-1" height="12" /> <span className="align-middle">German</span>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                        <img src="/template/assets/images/flags/italy.jpg" alt="user-image" className="mr-1" height="12" /> <span className="align-middle">Italian</span>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                        <img src="/template/assets/images/flags/russia.jpg" alt="user-image" className="mr-1" height="12" /> <span className="align-middle">Russian</span>
                    </a>
                </div>
            </div>

            <div className="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" className="btn header-item noti-icon waves-effect"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="bx bx-customize"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <div className="px-lg-2">
                        <div className="row no-gutters">
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="/template/assets/images/brands/github.png" alt="Github" />
                                    <span>GitHub</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="/template/assets/images/brands/bitbucket.png" alt="bitbucket" />
                                    <span>Bitbucket</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="/template/assets/images/brands/dribbble.png" alt="dribbble" />
                                    <span>Dribbble</span>
                                </a>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="/template/assets/images/brands/dropbox.png" alt="dropbox" />
                                    <span>Dropbox</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="/template/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                    <span>Mail Chimp</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="/template/assets/images/brands/slack.png" alt="slack" />
                                    <span>Slack</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i className="bx bx-fullscreen"></i>
                </button>
            </div>

            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="bx bx-bell bx-tada"></i>
                    <span className="badge badge-danger badge-pill">3</span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-notifications-dropdown">
                    <div className="p-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="m-0"> Notifications </h6>
                            </div>
                            <div className="col-auto">
                                <a href="#!" className="small"> View All</a>
                            </div>
                        </div>
                    </div>
                    <div data-simplebar style={{maxHeight: 230}}>
                        <a href="" className="text-reset notification-item">
                            <div className="media">
                                <div className="avatar-xs mr-3">
                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                        <i className="bx bx-cart"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Your order is placed</h6>
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                            <div className="media">
                                <img src="/template/assets/images/users/avatar-3.jpg"
                                    className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">James Lemire</h6>
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">It will seem like simplified English.</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                            <div className="media">
                                <div className="avatar-xs mr-3">
                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                        <i className="bx bx-badge-check"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Your item is shipped</h6>
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="" className="text-reset notification-item">
                            <div className="media">
                                <img src="/template/assets/images/users/avatar-4.jpg"
                                    className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 border-top">
                        <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="#">
                            <i className="mdi mdi-arrow-right-circle mr-1"></i> View More..
                        </a>
                    </div>
                </div>
            </div>

            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle header-profile-user" src="/template/assets/images/users/avatar-1.jpg"
                        alt="Header Avatar" />
                    <span className="d-none d-xl-inline-block ml-1">Henry</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">

                    <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle mr-1"></i> Profile</a>
                    <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle mr-1"></i> My Wallet</a>
                    <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right">11</span><i className="bx bx-wrench font-size-16 align-middle mr-1"></i> Settings</a>
                    <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle mr-1"></i> Lock screen</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout</a>
                </div>
            </div>

            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                    <i className="bx bx-cog bx-spin"></i>
                </button>
            </div>

        </div>
    </div>
    <div className="topnav" style={{marginTop:0}}>
        <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                <div className="collapse navbar-collapse" id="topnav-menu-content">
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-home-circle mr-2"></i>Dashboards <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-dashboard">

                                <a href="index.html" className="dropdown-item">Default</a>
                                <a href="dashboard-saas.html" className="dropdown-item">Saas</a>
                                <a href="dashboard-crypto.html" className="dropdown-item">Crypto</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-tone mr-2"></i>UI Elements <div className="arrow-down"></div>
                            </a>

                            <div className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                                aria-labelledby="topnav-uielement">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div>
                                            <a href="ui-alerts.html" className="dropdown-item">Alerts</a>
                                            <a href="ui-buttons.html" className="dropdown-item">Buttons</a>
                                            <a href="ui-cards.html" className="dropdown-item">Cards</a>
                                            <a href="ui-carousel.html" className="dropdown-item">Carousel</a>
                                            <a href="ui-dropdowns.html" className="dropdown-item">Dropdowns</a>
                                            <a href="ui-grid.html" className="dropdown-item">Grid</a>
                                            <a href="ui-images.html" className="dropdown-item">Images</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <a href="ui-lightbox.html" className="dropdown-item">Lightbox</a>
                                            <a href="ui-modals.html" className="dropdown-item">Modals</a>
                                            <a href="ui-rangeslider.html" className="dropdown-item">Range Slider</a>
                                            <a href="ui-session-timeout.html" className="dropdown-item">Session Timeout</a>
                                            <a href="ui-progressbars.html" className="dropdown-item">Progress Bars</a>
                                            <a href="ui-sweet-alert.html" className="dropdown-item">Sweet-Alert</a>
                                            <a href="ui-tabs-accordions.html" className="dropdown-item">Tabs & Accordions</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <a href="ui-typography.html" className="dropdown-item">Typography</a>
                                            <a href="ui-video.html" className="dropdown-item">Video</a>
                                            <a href="ui-general.html" className="dropdown-item">General</a>
                                            <a href="ui-colors.html" className="dropdown-item">Colors</a>
                                            <a href="ui-rating.html" className="dropdown-item">Rating</a>
                                            <a href="ui-notifications.html" className="dropdown-item">Notifications</a>
                                            <a href="ui-image-cropper.html" className="dropdown-item">Image Cropper</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-customize mr-2"></i>Apps <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-pages">

                                <a href="calendar.html" className="dropdown-item">Calendar</a>
                                <a href="chat.html" className="dropdown-item">Chat</a>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Email <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-email">
                                        <a href="email-inbox.html" className="dropdown-item">Inbox</a>
                                        <a href="email-read.html" className="dropdown-item">Read Email</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Ecommerce <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                        <a href="ecommerce-products.html" className="dropdown-item">Products</a>
                                        <a href="ecommerce-product-detail.html" className="dropdown-item">Product Detail</a>
                                        <a href="ecommerce-orders.html" className="dropdown-item">Orders</a>
                                        <a href="ecommerce-customers.html" className="dropdown-item">Customers</a>
                                        <a href="ecommerce-cart.html" className="dropdown-item">Cart</a>
                                        <a href="ecommerce-checkout.html" className="dropdown-item">Checkout</a>
                                        <a href="ecommerce-shops.html" className="dropdown-item">Shops</a>
                                        <a href="ecommerce-add-product.html" className="dropdown-item">Add Product</a>
                                    </div>
                                </div>

                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-crypto"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Crypto <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-crypto">
                                        <a href="crypto-wallets.html" className="dropdown-item">Wallets</a>
                                        <a href="crypto-buy-sell.html" className="dropdown-item">Buy/Sell</a>
                                        <a href="crypto-exchange.html" className="dropdown-item">Exchange</a>
                                        <a href="crypto-lending.html" className="dropdown-item">Lending</a>
                                        <a href="crypto-orders.html" className="dropdown-item">Orders</a>
                                        <a href="crypto-kyc-application.html" className="dropdown-item">KYC Application</a>
                                        <a href="crypto-ico-landing.html" className="dropdown-item">ICO Landing</a>
                                    </div>
                                </div>
                    
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-project"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Projects <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-project">
                                        <a href="projects-grid.html" className="dropdown-item">Projects Grid</a>
                                        <a href="projects-list.html" className="dropdown-item">Projects List</a>
                                        <a href="projects-overview.html" className="dropdown-item">Project Overview</a>
                                        <a href="projects-create.html" className="dropdown-item">Create New</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-task"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tasks <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-task">
                                        <a href="tasks-list.html" className="dropdown-item">Task List</a>
                                        <a href="tasks-kanban.html" className="dropdown-item">Kanban Board</a>
                                        <a href="tasks-create.html" className="dropdown-item">Create Task</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-contact"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Contacts <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-contact">
                                        <a href="contacts-grid.html" className="dropdown-item">User Grid</a>
                                        <a href="contacts-list.html" className="dropdown-item">User List</a>
                                        <a href="contacts-profile.html" className="dropdown-item">Profile</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-collection mr-2"></i>Components <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-components">
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Forms <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-form">
                                        <a href="form-elements.html" className="dropdown-item">Form Elements</a>
                                        <a href="form-validation.html" className="dropdown-item">Form Validation</a>
                                        <a href="form-advanced.html" className="dropdown-item">Form Advanced</a>
                                        <a href="form-editors.html" className="dropdown-item">Form Editors</a>
                                        <a href="form-uploads.html" className="dropdown-item">Form File Upload</a>
                                        <a href="form-xeditable.html" className="dropdown-item">Form Xeditable</a>
                                        <a href="form-repeater.html" className="dropdown-item">Form Repeater</a>
                                        <a href="form-wizard.html" className="dropdown-item">Form Wizard</a>
                                        <a href="form-mask.html" className="dropdown-item">Form Mask</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tables <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-table">
                                        <a href="tables-basic.html" className="dropdown-item">Basic Tables</a>
                                        <a href="tables-datatable.html" className="dropdown-item">Data Tables</a>
                                        <a href="tables-responsive.html" className="dropdown-item">Responsive Table</a>
                                        <a href="tables-editable.html" className="dropdown-item">Editable Table</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Charts <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-charts">
                                        <a href="charts-apex.html" className="dropdown-item">Apex charts</a>
                                        <a href="charts-echart.html" className="dropdown-item">E charts</a>
                                        <a href="charts-chartjs.html" className="dropdown-item">Chartjs Chart</a>
                                        <a href="charts-flot.html" className="dropdown-item">Flot Chart</a>
                                        <a href="charts-tui.html" className="dropdown-item">Toast UI Chart</a>
                                        <a href="charts-knob.html" className="dropdown-item">Jquery Knob Chart</a>
                                        <a href="charts-sparkline.html" className="dropdown-item">Sparkline Chart</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Icons <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-">
                                        <a href="icons-boxicons.html" className="dropdown-item">Boxicons</a>
                                        <a href="icons-materialdesign.html" className="dropdown-item">Material Design</a>
                                        <a href="icons-dripicons.html" className="dropdown-item">Dripicons</a>
                                        <a href="icons-fontawesome.html" className="dropdown-item">Font awesome</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Maps <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-map">
                                        <a href="maps-google.html" className="dropdown-item">Google Maps</a>
                                        <a href="maps-vector.html" className="dropdown-item">Vector Maps</a>
                                        <a href="maps-leaflet.html" className="dropdown-item">Leaflet Maps</a>
                                    </div>
                                </div>
                            </div>
                        </li>

            

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-file mr-2"></i>Extra pages <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-more">
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-invoice"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Invoices <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-invoice">
                                        <a href="invoices-list.html" className="dropdown-item">Invoice List</a>
                                        <a href="invoices-detail.html" className="dropdown-item">Invoice Detail</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Authentication <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                        <a href="auth-login.html" className="dropdown-item">Login</a>
                                        <a href="auth-register.html" className="dropdown-item">Register</a>
                                        <a href="auth-recoverpw.html" className="dropdown-item">Recover Password</a>
                                        <a href="auth-lock-screen.html" className="dropdown-item">Lock Screen</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Utility <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-utility">
                                        <a href="pages-starter.html" className="dropdown-item">Starter Page</a>
                                        <a href="pages-maintenance.html" className="dropdown-item">Maintenance</a>
                                        <a href="pages-comingsoon.html" className="dropdown-item">Coming Soon</a>
                                        <a href="pages-timeline.html" className="dropdown-item">Timeline</a>
                                        <a href="pages-faqs.html" className="dropdown-item">FAQs</a>
                                        <a href="pages-pricing.html" className="dropdown-item">Pricing</a>
                                        <a href="pages-404.html" className="dropdown-item">Error 404</a>
                                        <a href="pages-500.html" className="dropdown-item">Error 500</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-layout mr-2"></i>Layouts <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="topnav-layout">
                                <a href="layouts-vertical.html" className="dropdown-item">Vertical</a>
                                <a href="layouts-topbar-light.html" className="dropdown-item">Topbar light</a>
                                <a href="layouts-boxed-width.html" className="dropdown-item">Boxed width</a>
                                <a href="layouts-preloader.html" className="dropdown-item">Preloader</a>
                                <a href="layouts-colored-header.html" className="dropdown-item">Colored Header</a>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </div>
</header>


</div>
      </main>

      <footer className={styles.footer}>
        <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-6">
                      
                  </div>
                  <div className="col-sm-6">
                      <div className="text-sm-right d-none d-sm-block">
                          Design & Develop by Themesbrand
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  )
}
