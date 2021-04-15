const Header = () => {
  return (
    <div>
      <head>
        <title>Next.js demo</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </head>
      <div className='header-bar'>Header</div>
      <style jsx>
        {`
          .header-bar {
            width: 100%;
            height: 50px;
            line-height: 50px;
            background: lightblue;
            text-align: center;
            display: flex;
          }
        `}
      </style>
    </div>
  )
}

export default Header
