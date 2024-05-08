import { Component, Input, OnInit } from '@angular/core';
import { Step1FormInterface, Step2FormInterface } from '../../../core/models/tesla';
import { ImageComponent } from '../../../shared/components/image/image.component';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [
    ImageComponent,
    CurrencyFormatPipe
  ],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.scss'
})
export class Step3Component implements OnInit {
  @Input() step1FormState: Step1FormInterface | null = null;
  @Input() step2FormState: Step2FormInterface | null = null;

  readonly OPTION_UPSELL_PRICE: number = 1000;
  totalPrice: number = 0;

  ngOnInit(): void {
    this.totalPrice = this.calculateTotal();
  }

  private calculateTotal(): number {
    // config and color selected
    const configPrice: number = this.step2FormState?.selectedConfig?.price || 0;
    const colorPrice: number = this.step1FormState?.selectedColor?.price || 0;

    // options selected
    const yokePrice: number = this.step2FormState?.yoke ? this.OPTION_UPSELL_PRICE : 0;
    const towHitchPrice: number = this.step2FormState?.towHitch ? this.OPTION_UPSELL_PRICE : 0;

    return configPrice + colorPrice + yokePrice + towHitchPrice;
  }
}
