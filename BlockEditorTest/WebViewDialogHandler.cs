﻿using System;
using System.Windows.Forms;
using CefSharp;

namespace BlockEditorTest {
    class WebViewDialogHandler : IJsDialogHandler {

        private Form Parent;
        private string PromptResult;

        public WebViewDialogHandler(Form parent) {
            this.Parent = parent;
        }

        public bool OnJSAlert(IWebBrowser browser, string url, string message) {
            if (Parent.InvokeRequired)
                Parent.Invoke(new Func<IWebBrowser, string, string, bool>(OnJSAlert), browser, url, message);
            else {
                PromptDialog dlg = new PromptDialog();
                dlg.Text = browser.Title;
                dlg.PromptText = message;
                dlg.isPrompt = false;
                dlg.isOKCancel = false;
                dlg.messageBoxIcon = MessageBoxIcon.Exclamation;
                dlg.ShowDialog(Parent);
            }
            return true;
        }

        public unsafe bool OnJSConfirm(IWebBrowser browser, string url, string message, bool* retval) {
            if (Parent.InvokeRequired)
                *retval = (bool)Parent.Invoke(new Func<IWebBrowser, string, bool>(OnJSConfirm), browser, message);
            else
                *retval = OnJSConfirm(browser, message);
            return true;
        }

        private bool OnJSConfirm(IWebBrowser browser, string message) {
            PromptDialog dlg = new PromptDialog();
            dlg.Text = browser.Title;
            dlg.PromptText = message;
            dlg.isPrompt = false;
            dlg.messageBoxIcon = MessageBoxIcon.Question;
            bool result = dlg.ShowDialog(Parent) == DialogResult.OK;
            return result;
        }

        public unsafe bool OnJSPrompt(IWebBrowser browser, string url, string message, string defaultValue, bool* retval, ref string result) {
            PromptResult = defaultValue;
            if (Parent.InvokeRequired)
                *retval = (bool)Parent.Invoke(new Func<IWebBrowser, string, bool>(OnJSPrompt), browser, message);
            else
                *retval = OnJSPrompt(browser, message);
            if (*retval)
                result = PromptResult;
            return true;
        }

        private bool OnJSPrompt(IWebBrowser browser, string message) {
            PromptDialog dlg = new PromptDialog();
            dlg.Text = browser.Title;
            dlg.PromptText = message;
            dlg.Value = PromptResult;
            dlg.messageBoxIcon = MessageBoxIcon.Question;
            bool result = dlg.ShowDialog(Parent) == DialogResult.OK;
            if (result) PromptResult = dlg.Value;
            return result;
        }
    }
}
