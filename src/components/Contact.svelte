<script>
  import { Accordion, AccordionItem } from "svelte-accessible-accordion";
  import Fa from "svelte-fa";
  import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
  import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
  import Button, { Label } from "@smui/button";

  import { getNotificationsContext } from "svelte-notifications";

  const { addNotification } = getNotificationsContext();

  export let flowerSrc;

  let expanded;
  let upDown = false;
  let btnCopyAccountMan;
  let btnCopyAccountWoman;

  function handleClick() {
    upDown = !upDown;
  }

  function copyAccount(target) {
    let account;
    let targetTag;
    let result = false;
    let resultMsg;
    let textarea = document.createElement("textarea");
    try {
      targetTag = target === "Man" ? btnCopyAccountMan : btnCopyAccountWoman;
      resultMsg =
        target === "Man"
          ? document.getElementById("copyResultMan")
          : document.getElementById("copyResultWoman");
      account = targetTag.innerText;
      textarea.textContent = account.replace(/-/g, "");
      document.body.append(textarea);
      textarea.select();
      result = document.execCommand("copy");
      textarea.remove();
    } catch (error) {
      console.log(error);
    }
    if (result) {
      addNotification({
        text: "계좌번호가 복사되었습니다.",
        position: "bottom-center",
        type: "success",
        removeAfter: 1000,
      });
    }
  }
</script>

<style>
  :global([data-accordion]) {
    width: 100%;
  }

  :global([data-accordion-item] button) {
    border: 0;
    border-bottom: 1px solid #e0e0e0;
    background: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    cursor: pointer;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: left;
    margin: 0;
  }

  * :global(.copyBtn) {
    all: unset;
    margin: 0;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    font-size: 0.75rem;
    width: 2rem;
  }

  :global(.default-position-style-bottom-center) {
    font-size: 0.7rem;
  }
</style>

<div class="flex justify-center mt-20">
  <img src="{flowerSrc}" alt="flower" class="w-8" />
</div>
<div class="text-center">
  <p class="text-xs mb-8 tracking-widest">마음 전하실 곳</p>
</div>
<div class="mb-20">
  <Accordion>
    <AccordionItem bind:expanded class="showHide">
      <strong slot="title" class="flex justify-between text-base"
        >신랑측 계좌번호
        <Fa
          size="lg"
          color="#F9E79F"
          icon="{expanded ? faChevronUp : faChevronDown}"
          class="mr-2"
        />
      </strong>
      <div class="flex flex-row justify-between items-center">
        <p class="text-sm">
          농협은행 <sapn bind:this="{btnCopyAccountMan}">302-0378-8295-61</sapn>
          (박찬유)
        </p>
        <Button
          color="secondary"
          on:click="{() => copyAccount('Man')}"
          variant="outlined"
          class="copyBtn"
        >
          <Label id="copyResultMan">복사</Label>
        </Button>
      </div>
    </AccordionItem>
    <AccordionItem bind:upDown on:click="{handleClick}" class="showHide">
      <strong slot="title" class="flex justify-between text-base"
        >신부측 계좌번호
        <Fa
          size="lg"
          color="#F9E79F"
          icon="{upDown ? faChevronUp : faChevronDown}"
          class="mr-2"
        />
      </strong>
      <div class="flex flex-row justify-between items-center">
        <p class="text-sm">
          기업은행 <sapn bind:this="{btnCopyAccountWoman}">010-8714-1820</sapn> (김인수)
        </p>
        <Button
          color="secondary"
          on:click="{() => copyAccount('Woman')}"
          variant="outlined"
          class="copyBtn"
        >
          <Label id="copyResultWoman">복사</Label>
        </Button>
      </div>
    </AccordionItem>
  </Accordion>
</div>
