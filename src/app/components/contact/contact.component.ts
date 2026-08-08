import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  quoteForm: FormGroup;
  submitted = false;
  success = false;

  services = [
    'Smart Home Installation',
    'DSTV Installation',
    'CCTV & Security',
    'Electrical Works (Domestic)',
    'Electrical Works (Industrial)',
    'Fire Alarm System',
    'Intercom & Data',
    'Automation',
    'Repairs & Maintenance',
    'Other'
  ];

  contactItems = [
    { icon: 'whatsapp', label: 'WhatsApp', value: '07055555754', href: 'https://wa.me/2347055555754' },
    { icon: 'phone', label: 'Telephone', value: '07088580855', href: 'tel:07088580855' },
    { icon: 'mail', label: 'Email', value: 'asufolly@gmail.com', href: 'mailto:asufolly@gmail.com' }
  ];

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      service: ['', Validators.required],
      message: ['']
    });
  }

  get f() { return this.quoteForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.quoteForm.invalid) return;
    // In production: send to a backend / EmailJS / Firebase
    console.log('Quote request:', this.quoteForm.value);
    this.success = true;
  }

  resetForm(): void {
    this.success = false;
    this.submitted = false;
    this.quoteForm.reset();
  }
}
