import axios from "axios";
import flushPromises from "flush-promises";
import { mount } from "@vue/test-utils";
import AdviceGenerator from "@/components/AdviceGenerator";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

describe("AdviceGenerator.vue", () => {
    it("Component should has default values in template", () => {
        const wrapper = mount(AdviceGenerator);
        const heading = wrapper.find("[data-test=generator-heading]");
        const content = wrapper.find("[data-test=generator-content]");

        expect(heading.text()).toBe("ADVICE #117");
        expect(content.text()).toBe("“It is easy to sit up and take notice, what's difficult is getting up and taking action.”");
    });

    it("After click dice button, component should has correct values in template", async () => {
        const wrapper = mount(AdviceGenerator);
        const heading = wrapper.find("[data-test=generator-heading]");
        const content = wrapper.find("[data-test=generator-content]");
        const button = wrapper.find("[data-test=dice-button]");
        const apiUrl = "https://api.adviceslip.com/advice";
        
        mock.onGet(apiUrl).reply(200, {
            "slip": {
                "id": 171,
                "advice": "If you've nothing nice to say, say nothing."
            }
        });
        
        button.trigger("click");
        await flushPromises();

        expect(heading.text()).toBe("ADVICE #171");
        expect(content.text()).toBe("“If you've nothing nice to say, say nothing.”");
    });
});
