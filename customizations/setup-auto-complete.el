
(global-auto-complete-mode t)

(defun auto-complete-mode-maybe ()
  "No maybe for you.  Only AC!"
  (unless (minibufferp (current-buffer))
    (auto-complete-mode 1)))

(provide 'setup-auto-complete)
;;; setup-auto-complete.el ends here

(provide 'setup-auto-complete)

