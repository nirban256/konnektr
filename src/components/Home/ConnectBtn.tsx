import { ConnectButton } from "@rainbow-me/rainbowkit"

const ConnectBtn = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading"
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === "authenticated")

                        console.log("account", account)

                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                        className="w-[22.5%] h-[47.5px] rounded-[30px] bg-gradient-to-r from-text_gradient1 to-text_gradient2"
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    // <button
                                    //     onClick={openConnectModal}
                                    //     type="button"
                                    //     className="bg-white rounded-full"
                                    // >
                                    //     😎
                                    // </button>
                                    <button
                                        onClick={openConnectModal}
                                        type="button"
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <img
                                            src="/assets/svg/wallet.svg"
                                            alt=""
                                            className="w-[31px] h-[23px]"
                                        />
                                    </button>

                                )
                            }

                            if (chain.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        type="button"
                                    >
                                        Wrong network
                                    </button>
                                )
                            }

                            return (
                                <div style={{ display: "flex", gap: 12 }}>
                                    <button
                                        onClick={openChainModal}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background:
                                                        chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: "hidden",
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={
                                                            chain.name ??
                                                            "Chain icon"
                                                        }
                                                        src={chain.iconUrl}
                                                        style={{
                                                            width: 12,
                                                            height: 12,
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {/* {chain.name} */}
                                    </button>

                                    <button
                                        onClick={openAccountModal}
                                        type="button"
                                    >
                                        {/* {account.displayName} */}
                                    </button>
                                </div>
                            )
                        })()}
                    </div>
                )
            }}
        </ConnectButton.Custom>
    )
}

export default ConnectBtn
