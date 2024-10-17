import { Button, Divider } from "@mui/joy";
import React from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import PasswordAuthForm from "@/components/PasswordAuthForm";
import { absolutifyLink } from "@/helpers/utils";
import { useWorkspaceStore } from "@/stores";
import { IdentityProvider, IdentityProvider_Type } from "@/types/proto/api/v1/workspace_service";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const workspaceStore = useWorkspaceStore();

  const handleSignInWithIdentityProvider = async (identityProvider: IdentityProvider) => {
    const stateQueryParameter = identityProvider.id;
    if (identityProvider.type === IdentityProvider_Type.OAUTH2) {
      const redirectUri = absolutifyLink("/auth/callback");
      const oauth2Config = identityProvider.config?.oauth2;
      if (!oauth2Config) {
        toast.error("Identity provider configuration is invalid.");
        return;
      }
      const authUrl = `${oauth2Config.authUrl}?client_id=${
        oauth2Config.clientId
      }&redirect_uri=${redirectUri}&state=${stateQueryParameter}&response_type=code&scope=${encodeURIComponent(
        oauth2Config.scopes.join(" "),
      )}`;
      window.location.href = authUrl;
    }
  };
  const BeianIconData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAFQklEQVRYw+3Wa1BUdRjH8SOpMeg4WhZGpDIxiaaTeUFgWrxE4AVRQJGlRRAVIV1JkbgMgQLi5AVBQSVLSp0xlEAUKBEEFZCrCstll8UV2AV2YbmoGCrYv31+R95UL5pmmtamZ+bz6rz5nvOc/5zDcX9jGLs/iTxuyvIlWYkRFeTHA2HVRFtzfhthTG5KuH96/vUgNlC4mMgyw1NJit/aAXLKazYje9xtIMZ/OZz50gW+9hcNkvoLEemEPbnrSP47QYwxQ5Ifv54RqzcXwFFvSyjaOhfavN8F7Y5ZcC/HH9JOB4LNa9Zw5YA76OZV8vIGMdZtSp7cDrtOnOavYiQhTAiPwi1AMtIQaqyngsxpBtw2GAGDKfaQmpUAa6xc4Vfp4UtEdzAMycsT9JQ1Tyctl/2eEkuTlYysF/rCUNxMqDEzgTqzSXBnpgnIHCzgjvEEuD52DLBr3rA1MAaWmNtB582wdtIljZ9G9D+IPU6aTxIPBjHCcXvg3CEh9K2fDLWvjIH6D6fwTIyheuwEqLUyhzLOALq8pkN+bgRw3HY4FBsMzxojZxP9DequLjAlQwVrbpIjhyIY4UYGQ/buhdBqPxlk3Gion2IMDQIz3kJe/ZS34I7uHkmD7VSQVgYDNyIAwsNCgfXGXoOBPjP9DKrOCAogA2etGTmTHAMcFwFZye7wS5QlVHGjoEw4A2qPCUBZ6AzNcQ5Q/YYRdO+YB1U3dsDwypLio4FJ3ECryIzWz6Cm3NgTRHN8HiPF6eHAGSbAdh8feFZkB7krzaHE9h2o85sDsiAbkIsXQMN+e2CtGyF0kzdwXCgU5++D/ouLQFV4OEU/g2Q/iNuIPNaKkQflAWBqexxGjhLDVUcL6IwSQN3SGVChe6FJg9dckCx6D1QBliDZLIAxo7eA8eyv4KE0BJqTrHkZvnL9DJKn+Twmt0NsGGHZy2Dn3kQYfsQ53Hh4/r4RNGz8AIpdzKEuaAF0RC2E57MmQgE3ATjuM/CPiANW7AqSfQJQ5vk362eQKmd3JrmXsoSRocpNIMnbB9zbceDIWUPmuHFQNMkISqa9DpUvNK6YDpW2s8DfwBK48WFQnhMCgzUBoLy0BrRVe5P0NWjPLdKUsJiR1tR1wGp8IeZwMgx/SrgRvjxuAziNcwLvyathLOcJHLflhRDYGRYFrNET2rJ5yvPLoas0tOj/oL8UpC4JHyTSU+6MNCS4gvKoAB5WiKG+MAQSg0WwLXQ/ZJ3xhao0FxB5hYCbUwAEfhEF3Td8QP2dAOQnPwFlxgrolUVq9TPoaX+ZB2nLc2Gk6awj1MU78HZZwJMid2Byb550JQwVO0NfxlJgdz14vWKeRAiK6DlQF28PLZdcoLNcBIO92bb6GTQ8Q/13RURT6tlH2gvXMlITLYD6uI+gp2ozdF0VQXumM6ivCqGvahM8kPiDItkeGo8tB025GFQ3xFrSr06zI3/4yde7oN7m0sWk5eKWDqK5JWJQvAHac9ygq3Adr9gTNNc3QG85rzPfHe5/7wDtPwuhp/Zz6CjyhaZzwi6ivfetHdH/oP77+3PJQOsuRnqkQdCa4wWqyx6gyecpL64GTaEX7ycXUJz4GJp1B4O0X/Hg0Xp1tFV+8Ei1k6c5coHofxBrrzQinbKYo0SVJ+wn6iurGHlY5gY911aDJnMFaHXXiDp9GQyvtKfUA9QFTtBZ7gPdit0tpFd9OpwwFmlA9D/o9yNLDpxIKmI8PMnNSNtviCLVpYTITzrXEGWaq4qos0WgOPdpCenIF+eRrurjB4k0PXopYZG6gMg/D/gNBUxhAbSAmKMAAAAASUVORK5CYII=";

  return (
    <>
      <div className="flex flex-row justify-center items-center w-full h-auto pt-12 sm:pt-24 bg-white dark:bg-zinc-900">
        <div className="w-80 max-w-full h-full py-4 flex flex-col justify-start items-center">
          <div className="w-full py-4 grow flex flex-col justify-center items-center">
            <div className="flex flex-row justify-start items-center w-auto mx-auto gap-y-2 mb-4">
              <Logo className="mr-2" />
              <span className="text-3xl opacity-80 dark:text-gray-500">Slash</span>
            </div>
            {!workspaceStore.setting.disallowPasswordAuth ? (
              <PasswordAuthForm />
            ) : (
              <p className="w-full text-2xl mt-2 dark:text-gray-500">Password auth is not allowed.</p>
            )}
            {!workspaceStore.setting.disallowUserRegistration && !workspaceStore.setting.disallowPasswordAuth && (
              <p className="w-full mt-4 text-sm">
                <span className="dark:text-gray-500">{"Don't have an account yet?"}</span>
                <Link className="cursor-pointer ml-2 text-blue-600 hover:underline" to="/auth/signup" unstable_viewTransition>
                  {t("auth.sign-up")}
                </Link>
              </p>
            )}
            {workspaceStore.setting.identityProviders.length > 0 && (
              <>
                <Divider className="!my-4">{t("common.or")}</Divider>
                <div className="w-full flex flex-col space-y-2">
                  {workspaceStore.setting.identityProviders.map((identityProvider) => (
                    <Button
                      key={identityProvider.id}
                      variant="outlined"
                      color="neutral"
                      className="w-full"
                      size="md"
                      onClick={() => handleSignInWithIdentityProvider(identityProvider)}
                    >
                      {t("auth.sign-in-with", { provider: identityProvider.title })}
                    </Button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full h-auto mt-12 sm:mt-24 bg-white dark:bg-zinc-900 text-gray-600 text-sm">
        <img src={BeianIconData} alt="" style={{ width: '20px', height: '20px', verticalAlign: 'text-bottom' }} />
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002002590" rel="noreferrer" target="_blank"
           style={{ margin: 'auto 10px' }}>粤公网安备44030002002590</a>
        <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备15015487号</a>
      </div>
    </>
  );
};

export default SignIn;
