import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space, Tabs } from "antd";
import React from "react";
import "./Details.css";
// import Tabs from "../Details/Tabs";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};
const data = Array.from({
  length: 10,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `AppBoxo`,
  avatar:
    "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/znvtrucplosr9dnw88mh",
  description:
    "Appboxo provides integration software that allows the launching of miniapps within other native super apps.",
  content:
    "Appboxo has raised a total of $8.1M in funding over 5 rounds. Their latest funding was raised on Feb 16, 2022 from a Series A round",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const App = () => (
  <div className="details-main">
    <div className="details-inner">
      <div className="list">
        <List
          itemLayout="vertical"
          size="large"
          width={272}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 1,
          }}
          dataSource={data}
          footer={
            <div>
              <b> @ CA startups | company</b> details part
            </div>
          }
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZkAAAB7CAMAAACRgA3BAAAAXVBMVEX///+GhouDg4iAgIXi4uPGxsj39/jDw8XZ2dr6+vqhoaWRkZXf3+CIiI19fYPl5eWYmJzu7u/Pz9GOjpOurrG0tLe6ur2enqLy8vKrq66Xl5vS0tS+vsDLy852dnwdxnmxAAAOW0lEQVR4nO1d7cKqKhMtKFNTy8zKPs79X+ZrKjADw1jt9vatWH/O2T2EA4v5YBhpNgsICAgICAgICAgICAgICAgICAgICAgI+DVENKYW6+eRHaucxDGbWrTfxqYQcxpCbqYW7qex9xEzn8t6auF+Gl5eWqVpphbul1EWfmbkamrpfhk36WemCH5mQqR+NzPPpxbup8EYM7GfWrhfRsa5md3U0v0yrpyb+dAsQLLRSKaW5XWc/W5GnKcW7kUsCjmgWEwty8uIOGN2nVq6F7HQq018bnB54YzZp6bNvoIZJjUzL6YW7lV8BTO5nxiRTi3cq/gGZjacm1lOLd2r+AZmVpybKaeW7lV8AzPfmZr5AmYShpgPTs18ATNsauYytXQv4wuYOXxhamb2FcxsmdTMemrhXsfnM3PijNlhaulex+czs2OMmfzU1MzsG5j5ytTM7AuYSSo/MZ+bmpl9ATNsauY2tXR/gI9nhkvNyI9Nzcy+gJnvTM3MPp+ZyM/LO1Iz0SKLb7c425zeIOtz+HRmYs7NxH/UdbRr5kXRnca3/6n2D/VWZlm2eTzxkNzbl2QFBs1M+Wj3p3vPWfnmHEj0eK81l87sO9gsVySWbP+nWkrUtyhEjRdvonoaOFvU66KHOK6ondRiaD90Ezf50D5Pl45eOMwslodz33ye3lgPeloeRaFE2dZLW5bT1cyC1VFk/mJXg0W71PR63i9jtqQnGa+aWekaFAdMTcpVEh2LooHSREPPRfeyQVwVwkxmq2a1I/kgStGNeSnAiyVt+7l1xmcxU54Ls1Ta5mfvJjo7FlB40TYWVyxLbebEyl81pmIHG/BN6vRa1MzaLrnIrKuaYWrRxdHX7Wnt6VeugTDRIKlomTltnedIJ2hf9r3eaxM3ufMEmSN7iZk52O8HWavEzMiZepNIWiVEJm7CCSxTH46z9FFK9kqsPrcn4nvZWIu5h/OF8GqiyM1SAszQ35BnbCsMMztyvaDJRsykxCjEnFCbC6Xr3UMrKEuUG2qA5diYT9FLR/Hc12vuU92GcTPzrgUXVa9pZqIKqu1ds+G/ty4zh9JDpRDIWCtmLhePIovKTJNhZr5p6OXlvn+yZCyEgJMIeK/0h8lam0tUP8lUjQlB7+ajtfcrKjXDqIw3qi4Halpbum6ut+W1ddVmNWk118zsj176Czh5AzPi6s0oCZODXcDl4Gluv0635AwE0g7Q1HQCFgB0Mhdu+XsOJxejqZmMM3feWvSemmJ90wLGZ9WRWU6KmbmpqhJ3oIfAlepMHNE8V3q8IObDaY+nxerfaS2gQTM0qNXgcTKxJaHTK2XQuErzPtbkDjylf/vYUiMrvBhqiTqGzKg/tNFvfWiOAj5TVMZ3WDMni2Nz2KcVcq46C+sw03ab7tv2c2RcwRhi9NyiSuu6aSM6KAsYT2TC2j5XsjGCQVUsiSFuJew1J+bRb0Xm814KLhO9ZQLysmpsJ6R8mpYbMyOKdNF3GN1g4AWCH8SMrNSGapHCuVb7Y5sZub303SeXs+kHvIQK3aMo6mH/ejoAW4imHDBx7wQ4GRSzgiNjIRs1xBUYIpHSP3HFmZ0QbC06e+B5cqID9TR9hI2YkWtgxROoqsaGQGYkDDhjEKWrhY2ZEQJud25mts27juCZ8gw2rifgPlD5nXHs9+Lvvf5XDhuBg0m5BUOMavAHJz0Sc6Yqxg938XQtus43DJJDZuQeK2AGwlIdBBhmRIUfHoHZG8w+YkZscfy9MQtca7CJhuw1dzOBGAp6DJc5mCnsu4zNs4cYA+m8U0WgN37cgad49oUhJbzymIAZ6YR5G6PP2rov6WXZobFnD8VmjuE9aWrk8ImJddxg2ix8VEyUaG8gUi0uprX07HC6J5q/WbklNjXT08gR8/SBpzqkU8prmBHEzsjMhpZbM0NEmiUI8LoPkM64aTK9KVSqrxWAGpheoTgeLbVrMkM5okWgRyHO7kLWj7SVtGTmvV837IHn49cEJElUlpuNktJlhozp9YLUWRrFDJkWMkeAvesAzJC3gKjJVnkX7ampQwM9Vda1Fa4/sLRZqzKVuI90fFXhP3D7KrEYa/HANQEtH2V2bY7b8zoXhY4/HWao9QR8nHYFmhnqQMEMs+cZMOPavplJGQ4qclJfp22BNvzWaeLKWrs2AUqTXVfSfVsPEdsMLvHS7yLGo2o/oktzznNZSGc36DBDv3F4ckalmKnIrJCxOJ02g/wJeT1LopSkH4i2biN78sJaRDgjZ5ulkSHqvQ7W0xO3V+kH8/o1AdESJvUxXGboQzU1dTrMVtkZ2sPdsI4teFtp1KDXAhNbkUc3+uzXfm0lWoNROmZ2oe0EGchqT49ngE28dIN5vRb9Vo0G5IAZT/ytlEDncxQz9EZKO0WbGUGfIykN7IvqNK8VGXJqDXNkRRkum9WY51ubLRxYcImXviO2Fp052U/2XNeEztAsq8fbzHjegyt9OuOpA7ggZlSiylfK3fiYgRkuJ3GsNdGTlq9JZrhK834u1kwL0qP1iI4sMQ8zs/IxQ2dSjV96hZmDraAWUg8zuJDCftTuFWbK0dQMW4vOXBOAT0OEUOevtlsxzNBKUHusmSctdMLSAz9DG0s1axXsu51DelCaGWwarVkUZ8yAtmYVbWI0M3BtcomXfixcLTqTmkExvpyv98u4xz73MOOJJhqfn6GvwtPn4v2qAczQxB8QM3qwVOZ3BpjBf7ajV2vrpH2558pLvamC08kdZ/YMcy0k+SBbWFnd4ECGSMRlhjaNqiPNhGKGXtZ6bvud6VjUrOZ6iKfMHJJrLlK6gYvwXU9sJQmc3TKGDj8Bccn4ceZr1wSA8wiB0wSJjxk6cjEhpbJeeqdJLsAUW0uw0yTDLRUHDwqrzRJtK3dkgEDaHTQWT+5ggAmPwYcbTiHGUzP+awKAtNbqU9lcIjtDpU+0VdRGWDNDrQuTa+q3HDA7Qy1YnV8dhmLCHcKc6VWCDC9YhOZsBxsAk2KiVtPRttdwlOS8d728eE3Awes9Sp+fmZNK4yaytMyU0pi0eG9pYUYzJ5RGzbXymCbDRSiNLglBxspEt0VijlvQMtMxNbWaMvKRTOJFrLuBvFiLvvea1tiba6bkNgtDqI8MM25K0xzCD31BZgid1DP53/ABOGBxeDdHjDAAMGQUMdQ5GGiBswVna2BOQaFvG0/NJFy+k7nC2U0RK+gNL6EzztxRtSngM9tsg7K4YVmjUwAnMV7rhIFaEzD+tTTYJPthttCUVnUSwqJKQB84nLCMe2JUDur0eGqGrUVnUjNaZ2w9MNEPwcxcHqF5R2eU1GkzLhKMUNKh/wyfNktUkVlurSODO+DxLxrfziQAwWozTmaICoDWAlcDZUbLIwantnBZHhhT1S8Z7sDTTrhCmEAS56tMAQTJTLsjNcXD4JweRjXQNwp50M13OdS+HcUMLCqMDqCA2thFWOQij5qwzdFlfYaOHdXSIUtqE1D3Ic86cVnC7TiqlhpPvLx6gyOMJEEGdQPsMMlM+3m+32VZdqlxzbLRJRy1yHlzb77bo+Y6rHWqmmReX+7tmzloD0+ZbsBKCLldxlkWL7ewLgfsr2vXgYCCF5A7ztByOq/aXrPbEebhUaCLiqDsEXSEv5qawUsvXXTZijJuWlF4neklF0LgymIoth1PEs3NVGtmBGqP3x3BcRiyifeWVuvCjHtHuTyQ/chNluYw0iuugRhPzbC3nrNXhsLxCZFXx6rqiu9EM0QdRB2AVz8ldFYgAvC215OnmBFH/0As5U/4VCxwB6bWbAhkexhFgtGjp6pa9YqDmb+WmpnBipJBSPU/5daXnbn6TCcu3TBZR99eCwxTMSMv3lhG2MfQ0ZZbj4YY4GTQ1go6H2BXOGoKK8ocvQTgT64JOJFOrOXDl52RseeFG+s1DZAPvpGzDSMwzczO03guKmd/mzReFuHZizELVjIEZFbgHqX2/bqPcBwDM+/9s9jUzNit56U7z2J+8efNWh8aNYTw0qrANcwkMJQ1w4ReAzDTmma3cyFTKqt8c1+Z6nqBVZs3yslYIrYKCYtI6TNeWTnpU/+ho+hDOK4WffyagDK1pkKuN/c9b1etIYqLy0zrU8/2dyp7BUBm7q/X4ahb4hf8FkN33buDWWV1LuTas75Oh9zmUch8CaYZOhnnQAxUJELT0tVFOL0e3PO0KPW8ellU/YLmqmYeuSYga2PToWbmHov0e4/VoYN6kdY600yy5h489V8RxfrqiI2YaWeoDa/NI7Y7vMnaVOsO/SsJ0XWrOidbQ5xWx/z+UmcHWch1uoOiRJV6F7MgXrAoc/2m5n9oZxnd0kr3en/387ikT4I2MYk+yp2dGGK41AwU8bY/rtd5Ozep/QKwkhUzc3/srdmu2xk9p4eMOJ61mGnb79pnVFXb/rpwZlr9uOHwh6Tc1a1Abe/HZjX2UwGnze1a12lTH5ax/Y54CWaL+CqcWKfX3artNU3rehW/eD/Jm64JiKKS+d1Hsg4giU56Mm04zHS9+NtTAp0+/HcoH7gm4M8xVqHhgGTmt/DANQFvQGDmebDXBLztB+kCM89jvBb9HQjMPI/xawLegcDM04j+zQ2OgZmnwV4T8L4fpAvMPA2u0ly8uEMiEJh5Gn/yQtMTCMw8C+7A88HUzEMIzDyLv3iDI0Jg5llwlwDkb8w6BWaeRDR+TcCbHhSYeQ6bf5KamQVmngabmnnn1ceBmSfBXhPwzgdF/w135P73IDMr9QWqtv/78cA1Ae9CovDXvvBVGK9FD5gGXC06eYFLwD/C+DUBAZNg/JqAgGkwXoseMA3Ga9EDJsED1wQETAL2mgD/JQABfx3/LDUT8CSY4kzxo9mq/xMwOuPeqRzwDxGt1XsENmRIAEyL6JDSOARiAgICAgICAgICfgX/A8Hdr4/3lDJNAAAAAElFTkSuQmCC"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              <div className="tabs">
                <Tabs onChange={onChange} type="card">
                  <TabPane tab="Summary" key="1">
                    Appboxo provides integration software that allows the
                    launching of miniapps within other native super apps.
                  </TabPane>
                  <TabPane tab="Financials" key="2">
                    Appboxo has raised a total of $8.1M in funding over 5
                    rounds. Their latest funding was raised on Feb 16, 2022 from
                    a Series A round. Appboxo is funded by 10 investors. Antler
                    and Huey Lin are the most recent investors.
                  </TabPane>
                  <TabPane tab="People" key="3">
                    Appboxo has 2 current employee profiles, including
                    Co-founder and CTO Nursultan Keneshbekov.
                  </TabPane>
                  <TabPane tab="Technology" key="4">
                    Appboxo is actively using 66 technologies for its website,
                    according to BuiltWith. These include Viewport Meta, IPhone
                    / Mobile Compatible, and SPF.
                  </TabPane>
                  <TabPane tab="Signals/News" key="5">
                    e27 News — Appboxo raises US$7M Series A led by RTP Global
                    to further develop product, expand globally
                  </TabPane>
                  <TabPane tab="Similar companies" key="6">
                    V-Key, Kdan Mobile Software, Reveal Mobile
                  </TabPane>
                </Tabs>
              </div>
              {/* {item.content} */}
            </List.Item>
          )}
        />
        <div className="details-news">
          <a
            class="twitter-timeline"
            href="https://twitter.com/appboxo?ref_src=twsrc%5Etfw"
          >
            Tweets by appboxo
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
      {/* Tabs */}
      <Tabs />
    </div>
  </div>
);

export default App;
