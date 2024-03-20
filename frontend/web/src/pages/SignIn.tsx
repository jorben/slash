import { Button, Input } from "@mui/joy";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import { authServiceClient } from "@/grpcweb";
import useNavigateTo from "@/hooks/useNavigateTo";
import useUserStore from "@/stores/v1/user";
import useWorkspaceStore from "@/stores/v1/workspace";
import useLoading from "../hooks/useLoading";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const navigateTo = useNavigateTo();
  const workspaceStore = useWorkspaceStore();
  const userStore = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const actionBtnLoadingState = useLoading(false);
  const allowConfirm = email.length > 0 && password.length > 0;

  useEffect(() => {
    if (workspaceStore.profile.mode === "demo") {
      setEmail("steven@yourselfhosted.com");
      setPassword("secret");
    }
  }, []);

  const handleEmailInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value as string;
    setEmail(text);
  };

  const handlePasswordInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value as string;
    setPassword(text);
  };

  const handleSigninBtnClick = async (e: FormEvent) => {
    e.preventDefault();
    if (actionBtnLoadingState.isLoading) {
      return;
    }

    try {
      actionBtnLoadingState.setLoading();
      const { user } = await authServiceClient.signIn({ email, password });
      if (user) {
        userStore.setCurrentUserId(user.id);
        await userStore.fetchCurrentUser();
        navigateTo("/");
      } else {
        toast.error("Signin failed");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.details);
    }
    actionBtnLoadingState.setFinish();
  };

  const BeianIconData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAFQklEQVRYw+3Wa1BUdRjH8SOpMeg4WhZGpDIxiaaTeUFgWrxE4AVRQJGlRRAVIV1JkbgMgQLi5AVBQSVLSp0xlEAUKBEEFZCrCstll8UV2AV2YbmoGCrYv31+R95UL5pmmtamZ+bz6rz5nvOc/5zDcX9jGLs/iTxuyvIlWYkRFeTHA2HVRFtzfhthTG5KuH96/vUgNlC4mMgyw1NJit/aAXLKazYje9xtIMZ/OZz50gW+9hcNkvoLEemEPbnrSP47QYwxQ5Ifv54RqzcXwFFvSyjaOhfavN8F7Y5ZcC/HH9JOB4LNa9Zw5YA76OZV8vIGMdZtSp7cDrtOnOavYiQhTAiPwi1AMtIQaqyngsxpBtw2GAGDKfaQmpUAa6xc4Vfp4UtEdzAMycsT9JQ1Tyctl/2eEkuTlYysF/rCUNxMqDEzgTqzSXBnpgnIHCzgjvEEuD52DLBr3rA1MAaWmNtB582wdtIljZ9G9D+IPU6aTxIPBjHCcXvg3CEh9K2fDLWvjIH6D6fwTIyheuwEqLUyhzLOALq8pkN+bgRw3HY4FBsMzxojZxP9DequLjAlQwVrbpIjhyIY4UYGQ/buhdBqPxlk3Gion2IMDQIz3kJe/ZS34I7uHkmD7VSQVgYDNyIAwsNCgfXGXoOBPjP9DKrOCAogA2etGTmTHAMcFwFZye7wS5QlVHGjoEw4A2qPCUBZ6AzNcQ5Q/YYRdO+YB1U3dsDwypLio4FJ3ECryIzWz6Cm3NgTRHN8HiPF6eHAGSbAdh8feFZkB7krzaHE9h2o85sDsiAbkIsXQMN+e2CtGyF0kzdwXCgU5++D/ouLQFV4OEU/g2Q/iNuIPNaKkQflAWBqexxGjhLDVUcL6IwSQN3SGVChe6FJg9dckCx6D1QBliDZLIAxo7eA8eyv4KE0BJqTrHkZvnL9DJKn+Twmt0NsGGHZy2Dn3kQYfsQ53Hh4/r4RNGz8AIpdzKEuaAF0RC2E57MmQgE3ATjuM/CPiANW7AqSfQJQ5vk362eQKmd3JrmXsoSRocpNIMnbB9zbceDIWUPmuHFQNMkISqa9DpUvNK6YDpW2s8DfwBK48WFQnhMCgzUBoLy0BrRVe5P0NWjPLdKUsJiR1tR1wGp8IeZwMgx/SrgRvjxuAziNcwLvyathLOcJHLflhRDYGRYFrNET2rJ5yvPLoas0tOj/oL8UpC4JHyTSU+6MNCS4gvKoAB5WiKG+MAQSg0WwLXQ/ZJ3xhao0FxB5hYCbUwAEfhEF3Td8QP2dAOQnPwFlxgrolUVq9TPoaX+ZB2nLc2Gk6awj1MU78HZZwJMid2Byb550JQwVO0NfxlJgdz14vWKeRAiK6DlQF28PLZdcoLNcBIO92bb6GTQ8Q/13RURT6tlH2gvXMlITLYD6uI+gp2ozdF0VQXumM6ivCqGvahM8kPiDItkeGo8tB025GFQ3xFrSr06zI3/4yde7oN7m0sWk5eKWDqK5JWJQvAHac9ygq3Adr9gTNNc3QG85rzPfHe5/7wDtPwuhp/Zz6CjyhaZzwi6ivfetHdH/oP77+3PJQOsuRnqkQdCa4wWqyx6gyecpL64GTaEX7ycXUJz4GJp1B4O0X/Hg0Xp1tFV+8Ei1k6c5coHofxBrrzQinbKYo0SVJ+wn6iurGHlY5gY911aDJnMFaHXXiDp9GQyvtKfUA9QFTtBZ7gPdit0tpFd9OpwwFmlA9D/o9yNLDpxIKmI8PMnNSNtviCLVpYTITzrXEGWaq4qos0WgOPdpCenIF+eRrurjB4k0PXopYZG6gMg/D/gNBUxhAbSAmKMAAAAASUVORK5CYII=";

  return (
      <div>
        <div className="flex flex-row justify-center items-center w-full h-auto mt-12 sm:mt-24 bg-white dark:bg-zinc-900">
          <div className="w-80 max-w-full h-full py-4 flex flex-col justify-start items-center">
            <div className="w-full py-4 grow flex flex-col justify-center items-center">
              <div className="flex flex-row justify-start items-center w-auto mx-auto gap-y-2 mb-4">
                <Icon.CircleSlash className="w-12 h-auto dark:text-gray-500 mr-2" strokeWidth={1.5} />
                <span className="text-3xl opacity-80 dark:text-gray-500">Slash</span>
              </div>
              <form className="w-full mt-6" onSubmit={handleSigninBtnClick}>
                <div className={`flex flex-col justify-start items-start w-full ${actionBtnLoadingState.isLoading ? "opacity-80" : ""}`}>
                  <div className="w-full flex flex-col mb-2">
                    <span className="leading-8 mb-1 text-gray-600">{t("common.email")}</span>
                    <Input
                      className="w-full py-3"
                      type="email"
                      value={email}
                      placeholder="steven@slash.com"
                      onChange={handleEmailInputChanged}
                    />
                  </div>
                  <div className="w-full flex flex-col mb-2">
                    <span className="leading-8 text-gray-600">{t("common.password")}</span>
                    <Input className="w-full py-3" type="password" value={password} placeholder="····" onChange={handlePasswordInputChanged} />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-end items-center mt-4 space-x-2">
                  <Button
                    className="w-full"
                    type="submit"
                    color="primary"
                    loading={actionBtnLoadingState.isLoading}
                    disabled={actionBtnLoadingState.isLoading || !allowConfirm}
                    onClick={handleSigninBtnClick}
                  >
                    {t("auth.sign-in")}
                  </Button>
                </div>
              </form>
              {workspaceStore.profile.enableSignup && (
                <p className="w-full mt-4 text-sm">
                  <span className="dark:text-gray-500">{"Don't have an account yet?"}</span>
                  <Link className="cursor-pointer ml-2 text-blue-600 hover:underline" to="/auth/signup" unstable_viewTransition>
                    {t("auth.sign-up")}
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full h-auto mt-12 sm:mt-24 bg-white dark:bg-zinc-900 text-gray-600">
          <img src={BeianIconData} alt="" style={{ width: '20px', height: '20px', verticalAlign: 'text-bottom' }} />
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002002590" rel="noreferrer" target="_blank"
             style={{ margin: 'auto 10px' }}>粤公网安备44030002002590</a>
          <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备15015487号</a>
        </div>
      </div>
  );
};

export default SignIn;
