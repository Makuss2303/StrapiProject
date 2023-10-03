"use client"

import React from "react"
import Image from "next/image"
import { menu } from "./menuData"
import { useEffect, useRef, useState } from "react"
import WakkaButton from "@/components/atoms/button"

export default function Header() {
  const [scroll, setScroll] = useState(false)
  const [checked, setChecked] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const windowScroll = () => {
      setScroll(window.scrollY > 101)
    }
    const windowResize = () => {
      if (ref.current) {
        if (ref.current.clientWidth > 991) {
          setChecked(false)
        }
      }
    }
    window.addEventListener("scroll", windowScroll)
    window.addEventListener("resize", windowResize)
    return () => {
      window.removeEventListener("scroll", windowScroll)
      window.removeEventListener("resize", windowResize)
    }
  }, [scroll])
  const isBrowser = () => typeof window !== "undefined"
  function scrollToTop() {
    if (!isBrowser()) return
    window.scrollTo({ top: 0 })
  }
  return (
    <header id="header" className={scroll ? "is-sticky" : ""} ref={ref}>
      <div className="container-full">
        <nav className="navbar-pc">
          <div className="header__item">
            <a className="header__logo" onClick={scrollToTop}>
              <figure>
                <Image
                  src="/images/header-logo.png"
                  alt="logo"
                  fill
                  sizes="(max-width: 500px) 100vw"
                />
              </figure>
            </a>
            <ul className="header__nav">
              {menu && menu.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
        <nav className="navbar-mobile">
          <div className="navbar">
            <div className="header__logo">
              <div className="header__logo" onClick={scrollToTop}>
                <figure>
                  <Image
                    src="/images/header-logo.png"
                    alt="logo-mobile"
                    fill
                    sizes="(max-width: 200px) 100vw"
                  />
                </figure>
              </div>
            </div>
            <div className="menu">
              <input
                className="checkbox"
                type="checkbox"
                checked={checked}
                onChange={() => {
                  setChecked(!checked)
                }}
              />
              <div className="hamberger">
                <div className="top-line"></div>
                <div className="center-line"></div>
                <div className="bottom-line"></div>
              </div>
              <div className="slider">
                <ul className="slider-menu">
                  {menu && menu.map((item, index) => {
                    return (
                      <li className="slider-premium" key={index}>
                        <a
                          onClick={() => {
                            setChecked(false)
                          }}
                          href={item.link}
                        >
                          {item.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                <div className="slider-button">
                  <WakkaButton text="Wakka Inc.に今すぐ相談する" link="https://wakka-inc.com"/>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
