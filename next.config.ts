import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/profile", permanent: true },
      { source: "/personal-readings", destination: "/belly-dance", permanent: true },
      { source: "/blank-5", destination: "/yoga", permanent: true },
      { source: "/classes-and-seminars", destination: "/events", permanent: true },
      { source: "/large-grid", destination: "/gallery", permanent: true },
      { source: "/untitled", destination: "/studio-rental", permanent: true },
      { source: "/live", destination: "/events", permanent: true },
      { source: "/%E8%A4%87%E8%A3%BD-studio", destination: "/access", permanent: true },
      {
        source: "/%E8%A4%87%E8%A3%BD-yoga-%E3%83%9C%E3%83%87%E3%82%A3%E3%83%AF%E3%83%BC%E3%82%AF",
        destination: "/schedule",
        permanent: true,
      },
      {
        source: "/%E8%A4%87%E8%A3%BD-2020%E5%B9%B4event%E6%83%85%E5%A0%B1",
        destination: "/events?history=2022-2023",
        permanent: true,
      },
      {
        source: "/%E8%A4%87%E8%A3%BD-2019%E5%B9%B4event%E6%83%85%E5%A0%B1",
        destination: "/events?history=2020-2021",
        permanent: true,
      },
      { source: "/2018-event-1", destination: "/events?history=2019", permanent: true },
      { source: "/2018-event", destination: "/events?history=2018", permanent: true },
      { source: "/2017", destination: "/events?history=2017", permanent: true },
      { source: "/2016-event", destination: "/events?history=2016", permanent: true },
      { source: "/blank-nyz1j", destination: "/events?history=2015", permanent: true },
    ];
  },
};

export default nextConfig;
